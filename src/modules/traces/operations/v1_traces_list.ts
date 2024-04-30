import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (options?: AxiosRequestConfig): Promise<operations["v1_traces_list"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "get",
    url: `/v1/traces/`,
    
    ...options
  })
}