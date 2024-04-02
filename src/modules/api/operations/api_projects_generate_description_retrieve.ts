import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (id: string, options?: AxiosRequestConfig): Promise<operations["api_projects_generate_description_retrieve"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "get",
    url: `/api/projects/${id}/generate-description/`,
    
    ...options
  })
}