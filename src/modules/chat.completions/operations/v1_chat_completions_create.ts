import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import EventEmitter from "events"
import { parseEventString, eventEmitterToAsyncIterable } from "$utils/index"
import type { operations } from "$types/api"
import type {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  ChatCompletionStreamingCompletionData,
  DocumentChunk
} from "$types/index"


type CreateChatCompletionOut<T> = T extends true ? AsyncIterable<ChatCompletionStreamingCompletionData> & {
  trace_id: string | null,
  document_chunks: null | DocumentChunk[]
} : CreateChatCompletionResponse
type CreateChatCompletionRequestGeneric<T extends boolean> = Omit<CreateChatCompletionRequest, "stream"> & { stream: T }

export default (client: Prem) => async<T extends boolean>(
  args: CreateChatCompletionRequestGeneric<T>,
  options?: AxiosRequestConfig
): Promise<CreateChatCompletionOut<T>> => {
  const baseOptions = {
    method: "POST",
    data: args,
    url: "/v1/chat/completions",
    ...options
  }

  if (args.stream) {
    const rawStream = await client.call<EventEmitter>({
      ...baseOptions,
      responseType: "stream",
    })

    const parsedEventEmitter = new EventEmitter()

    let buffer = ''

    rawStream.on("data", (chunk: Buffer) => {
      buffer += chunk.toString()
      let splitPattern = /\n\nevent:/g
      let events = buffer.split(splitPattern)

      if (events.length > 1) {
        events.slice(0, -1).forEach(eventString => {
          eventString = eventString.startsWith('event:') ? eventString : 'event:' + eventString
          const { data, event } = parseEventString(eventString)

          if (event === "completion" && data !== null) {
            parsedEventEmitter.emit("data", data)
          } else if (event === "done") {
            parsedEventEmitter.emit("trace", data.traceId)
            parsedEventEmitter.emit("document_chunks", data.documentChunks)
            parsedEventEmitter.emit("end")
          }
        })

        buffer = events[events.length - 1]
      }
    })

    // Add an 'end' listener to handle any remaining data in the buffer.
    rawStream.on("end", () => {
      // Check if there is any remanent data that constitutes a complete event.
      if (buffer.trim()) {
        // Ensure the buffer is treated as a complete event for parsing.
        if (!buffer.startsWith('event:')) {
          buffer = 'event:' + buffer
        }
        const { data, event } = parseEventString(buffer)
        if (event === "completion" && data !== null) {
          parsedEventEmitter.emit("data", data)
        } else if (event === "done") {
          parsedEventEmitter.emit("trace", data.traceId)
          parsedEventEmitter.emit("document_chunks", data.documentChunks)
          parsedEventEmitter.emit("end")
        }
      }
    })

    const iterable = eventEmitterToAsyncIterable<ChatCompletionStreamingCompletionData>(parsedEventEmitter)
    return iterable as CreateChatCompletionOut<T>
  } else {
    return client.call<CreateChatCompletionResponse>(baseOptions) as Promise<CreateChatCompletionOut<T>>
  }
}
