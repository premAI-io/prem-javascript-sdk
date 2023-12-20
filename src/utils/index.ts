import { EventEmitter } from "events";

export function parseEventString(evt: string) {
  const eventRegex = /event:\s*(.+)/;
  const dataRegex = /data:\s*(.+)/;

  const eventMatch = evt.match(eventRegex);
  const dataMatch = evt.match(dataRegex);

  const event = eventMatch ? eventMatch[1].trim() : null;
  let data = dataMatch ? dataMatch[1].trim() : null;

  if (data) {
    if (data === "[DONE]") {
      data = null;
    } else {
      data = JSON.parse(data);
    }
  }

  return { event, data };
}

export function eventEmitterToAsyncIterable<T>(eventEmitter: EventEmitter): AsyncIterable<T> {
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

  eventEmitter.on("data", enqueue);
  eventEmitter.once("end", end);

  return {
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
}
