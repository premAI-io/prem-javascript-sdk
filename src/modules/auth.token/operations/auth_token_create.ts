import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (params: operations["auth_token_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["auth_token_create"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/auth-token/`,
    ...params,
    ...options
  })
}