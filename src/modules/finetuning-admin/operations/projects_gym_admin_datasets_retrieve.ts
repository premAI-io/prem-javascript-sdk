import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (id: string, options?: AxiosRequestConfig): Promise<operations["projects_gym_admin_datasets_retrieve"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "get",
    url: `/projects/gym/admin/datasets/${id}/`,
    
    ...options
  })
}