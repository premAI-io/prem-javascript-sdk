import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (id: string, params: operations["api_projects_data_points_update"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["api_projects_data_points_update"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "put",
    url: `/api/projects/data-points/${id}/`,
    ...params,
    ...options
  })
}