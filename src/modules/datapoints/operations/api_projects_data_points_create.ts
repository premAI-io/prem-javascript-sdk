import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (params: operations["api_projects_data_points_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["api_projects_data_points_create"]["responses"]["201"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/api/projects/data-points/`,
    ...params,
    ...options
  })
}