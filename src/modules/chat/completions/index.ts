import { AxiosRequestConfig } from "axios"
import { APIModule } from "$components/index"
import EventEmitter from "events"
import { parseEventString, eventEmitterToAsyncIterable } from "$utils/index"
import type {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  ChatCompletionStreamingCompletionMessage
} from "$types/index"

type A = (
  args: CreateChatCompletionRequest & { stream: true },
  options?: AxiosRequestConfig
) => Promise<AsyncIterable<ChatCompletionStreamingCompletionMessage>>

type B = (
  args: CreateChatCompletionRequest & { stream: false },
  options?: AxiosRequestConfig
) => Promise<CreateChatCompletionResponse>

type ConditionalType<T extends CreateChatCompletionRequest> = T["stream"] extends true ? AsyncIterable<ChatCompletionStreamingCompletionMessage> : CreateChatCompletionResponse

export default class ChatCompletionResource extends APIModule {
  create = async(
    args: CreateChatCompletionRequest,
    options?: AxiosRequestConfig
  ): Promise<
    AsyncIterable<ChatCompletionStreamingCompletionMessage> | CreateChatCompletionResponse
  > => {
    const baseOptions = {
      method: "POST",
      data: args,
      url: "/v1/chat/completions",
      ...options
    }

    if (args.stream === true) {
      const rawStream = await this.client.call<EventEmitter>({
        ...baseOptions,
        responseType: "stream",
      })

      const parsedEventEmitter = new EventEmitter()

      rawStream.on("data", (chunk: Buffer) => {
        const { data, event } = parseEventString(chunk.toString());
        if (event === "completion") {
          parsedEventEmitter.emit("data", data)
        } else if (event === "done") {
          parsedEventEmitter.emit("end")
        }
      })

      rawStream.on("end", () => {
        parsedEventEmitter.emit("end")
      })

      const iterable = eventEmitterToAsyncIterable<ChatCompletionStreamingCompletionMessage>(parsedEventEmitter)
      return iterable
    } else {
      return this.client.call(baseOptions)
    }
  }
}
