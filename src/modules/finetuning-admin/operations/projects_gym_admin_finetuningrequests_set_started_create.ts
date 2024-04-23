import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (params: operations["projects_gym_admin_finetuningrequests_set_started_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["projects_gym_admin_finetuningrequests_set_started_create"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/projects/gym/admin/finetuningrequests/set_started/`,
    data: params,
    ...options
  })
}