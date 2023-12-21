import { APIModule } from "$components/index"
import type { CreateEmbeddingRequest, CreateEmbeddingResponse } from "$types/index"
import { AxiosRequestConfig } from "axios"

export default class EmbeddingModule extends APIModule {
  create = (args: CreateEmbeddingRequest, options?: AxiosRequestConfig): Promise<CreateEmbeddingResponse> => {
    return this.client.call({
      method: "POST",
      data: args,
      url: "/v1/embeddings",
      ...options
    })
  }
}
