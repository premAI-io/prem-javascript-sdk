import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (id: string, params: operations["v1_data_points_partial_update"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["v1_data_points_partial_update"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "patch",
    url: `/v1/data-points/${id}/`,
    data: params,
    ...options
  })
}