import { AxiosRequestConfig } from "axios"
import { APIResource, APIRoute } from "$components/index"
import type { CreateChatCompletionRequest, CreateChatCompletionResponse } from "$types/index"

export class CreateChatCompletionRoute extends APIRoute<CreateChatCompletionRequest, CreateChatCompletionResponse> {
  method = "POST"
  endpoint = "/v1/chat/completions"

  call = async (request: CreateChatCompletionRequest, config?: AxiosRequestConfig) => {
    const { data } = await this._client.axios.post<CreateChatCompletionResponse>(this.endpoint, request, config)
    return data
  }
}

export default class ChatCompletionResource extends APIResource {
  create = new CreateChatCompletionRoute(this._client).call
}
