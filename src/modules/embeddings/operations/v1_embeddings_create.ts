import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { CreateEmbeddingRequest, CreateEmbeddingResponse } from "$types/index"

export default (client: Prem) => (params: CreateEmbeddingRequest, options?: AxiosRequestConfig): Promise<CreateEmbeddingResponse> => {
  return client.call({
    method: "POST",
    url: `/v1/embeddings`,
    data: params,
    ...options
  })
}
