import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (options?: AxiosRequestConfig): Promise<operations["api_projects_data_points_list"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "get",
    url: `/api/projects/data-points/`,
    
    ...options
  })
}