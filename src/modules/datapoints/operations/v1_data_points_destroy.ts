import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (id: string, options?: AxiosRequestConfig): Promise<operations["v1_data_points_destroy"]["responses"]["204"]["content"]["application/json"]> => {
  return client.call({
    method: "delete",
    url: `/v1/data-points/${id}/`,
    
    ...options
  })
}