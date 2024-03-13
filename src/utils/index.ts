import { EventEmitter } from "events"
import { DocumentChunk } from "../types"

type Out = null | string | {
  traceId: string,
  documentChunks: DocumentChunk[]
}

export function parseEventString(evt: string) {
  const eventRegex = /event:\s*(.+)/
  const dataRegex = /data:\s*(.+)/
  const traceIdRegex = /trace_id:\s*(.+)/
  const documentChunksRegex = /document_chunks:\s*(.+)/

  const eventMatch = evt.match(eventRegex)
  const dataMatch = evt.match(dataRegex)
  const traceIdMatch = evt.match(traceIdRegex)
  const documentChunksMatch = evt.match(documentChunksRegex)

  const event = eventMatch ? eventMatch[1].trim() : null
  let data: Out = dataMatch ? dataMatch[1].trim() : null
  const traceId = traceIdMatch ? traceIdMatch[1].trim() : null
  const documentChunks = documentChunksMatch ? JSON.parse(documentChunksMatch[1].trim()) : null

  if (data) {
    if (data === "[DONE]") {
      data = { traceId: traceId!, documentChunks }
    } else {
      data = JSON.parse(data)
    }
  }

  return { event, data }
}

export function eventEmitterToAsyncIterable<T>(eventEmitter: EventEmitter): AsyncIterable<T> & {
  trace_id: string | null,
  document_chunks: null | DocumentChunk
} {
  const queue: any[] = []
  let resolveQueue: any[] = []

  function enqueue(value: any) {
    if (resolveQueue.length > 0) {
      const resolve = resolveQueue.shift()
      resolve({ value, done: false })
    } else {
      queue.push(value)
    }
  }

  function end() {
    for (const resolve of resolveQueue) {
      resolve({ value: undefined, done: true })
    }
    resolveQueue = []
  }

  const out: AsyncIterable<T> & {
    trace_id: string | null,
    document_chunks: null | DocumentChunk
  } = {
    trace_id: null,
    document_chunks: null,
    async *[Symbol.asyncIterator]() {
      while (true) {
        if (queue.length > 0) {
          const value = queue.shift()
          yield value
        } else {
          const promise = new Promise(resolve => resolveQueue.push(resolve))
          const result: any = await promise
          if (result.done) return
          yield result.value
        }
      }
    }
  }

  eventEmitter.on("data", enqueue)
  eventEmitter.once("end", end)
  eventEmitter.once("trace", (traceId: string) => {
    out.trace_id = traceId
  })

  eventEmitter.once("document_chunks", (documentChunks: DocumentChunk) => {
    out.document_chunks = documentChunks
  })

  return out
}
