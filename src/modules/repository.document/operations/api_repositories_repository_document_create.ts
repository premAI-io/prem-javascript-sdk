import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (repository_id: string, options?: AxiosRequestConfig): Promise<operations["api_repositories_repository_document_create"]["responses"]["201"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/api/repositories/repository/${repository_id}/document`,
    
    ...options
  })
}