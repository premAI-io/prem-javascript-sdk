import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (params: operations["v1_finetuned_model_try_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["v1_finetuned_model_try_create"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/v1/finetuned_model_try`,
    data: params,
    ...options
  })
}