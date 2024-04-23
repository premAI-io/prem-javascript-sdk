import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (options?: AxiosRequestConfig): Promise<operations["projects_gym_admin_datasets_list"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "get",
    url: `/projects/gym/admin/datasets/`,
    
    ...options
  })
}