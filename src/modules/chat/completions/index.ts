import { AxiosRequestConfig } from "axios"
import { APIModule } from "$components/index"
import EventEmitter from "events"
import { parseEventString, eventEmitterToAsyncIterable } from "$utils/index"
import type {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  ChatCompletionStreamingCompletionData
} from "$types/index"

type CreateChatCompletionOut<T> = T extends true ? AsyncIterable<ChatCompletionStreamingCompletionData> & { trace_id: string | null } : CreateChatCompletionResponse
type CreateChatCompletionRequestGeneric<T extends boolean> = Omit<CreateChatCompletionRequest, "stream"> & { stream: T }
export default class ChatCompletionResource extends APIModule {
  create = async<T extends boolean>(
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
      const rawStream = await this.client.call<EventEmitter>({
        ...baseOptions,
        responseType: "stream",
      })

      const parsedEventEmitter = new EventEmitter()

      rawStream.on("data", (chunk: Buffer) => {
        const { data, event } = parseEventString(chunk.toString());
        if (event === "completion" && data !== null) {
          parsedEventEmitter.emit("data", data)
        } else if (event === "done") {
          parsedEventEmitter.emit("trace", data)
          parsedEventEmitter.emit("end")
        }
      })

      rawStream.on("end", () => {
        parsedEventEmitter.emit("end")
      })

      const iterable = eventEmitterToAsyncIterable<ChatCompletionStreamingCompletionData>(parsedEventEmitter)
      return iterable as CreateChatCompletionOut<T>
    } else {
      return this.client.call<CreateChatCompletionResponse>(baseOptions) as Promise<CreateChatCompletionOut<T>>
    }
  }
}
