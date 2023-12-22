import { EventEmitter } from "events";

export function parseEventString(evt: string) {
  const eventRegex = /event:\s*(.+)/;
  const dataRegex = /data:\s*(.+)/;
  const traceIdRegex = /trace_id:\s*(.+)/;

  const eventMatch = evt.match(eventRegex);
  const dataMatch = evt.match(dataRegex);
  const traceIdMatch = evt.match(traceIdRegex);

  const event = eventMatch ? eventMatch[1].trim() : null;
  let data = dataMatch ? dataMatch[1].trim() : null;
  const traceId = traceIdMatch ? traceIdMatch[1].trim() : null;

  if (data) {
    if (data === "[DONE]") {
      data = traceId;
    } else {
      data = JSON.parse(data);
    }
  }

  return { event, data };
}

export function eventEmitterToAsyncIterable<T>(eventEmitter: EventEmitter): AsyncIterable<T> & { trace_id: string | null } {
  const queue: any[] = [];
  let resolveQueue: any[] = [];

  function enqueue(value: any) {
    if (resolveQueue.length > 0) {
      const resolve = resolveQueue.shift();
      resolve({ value, done: false });
    } else {
      queue.push(value);
    }
  }

  function end() {
    for (const resolve of resolveQueue) {
      resolve({ value: undefined, done: true });
    }
    resolveQueue = [];
  }

  const out: AsyncIterable<T> & { trace_id: string | null } = {
    trace_id: null,
    async *[Symbol.asyncIterator]() {
      while (true) {
        if (queue.length > 0) {
          const value = queue.shift();
          yield value;
        } else {
          const promise = new Promise(resolve => resolveQueue.push(resolve));
          const result: any = await promise;
          if (result.done) return;
          yield result.value;
        }
      }
    }
  };

  eventEmitter.on("data", enqueue);
  eventEmitter.once("end", end);
  eventEmitter.once("trace", (traceId: string) => {
    out.trace_id = traceId;
  })

  return out
}
