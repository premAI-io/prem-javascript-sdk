import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (repository_id: string, params: operations["v1_repository_document_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["v1_repository_document_create"]["responses"]["201"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/v1/repository/${repository_id}/document`,
    data: params,
    ...options
  })
}