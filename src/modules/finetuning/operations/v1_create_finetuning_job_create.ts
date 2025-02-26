import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (params: operations["v1_create_finetuning_job_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["v1_create_finetuning_job_create"]["responses"]["201"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/v1/create_finetuning_job`,
    data: params,
    ...options
  })
}