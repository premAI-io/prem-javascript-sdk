import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (job_id: string, options?: AxiosRequestConfig): Promise<operations["v1_finetuning_retrieve"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "get",
    url: `/v1/finetuning/${job_id}`,
    
    ...options
  })
}