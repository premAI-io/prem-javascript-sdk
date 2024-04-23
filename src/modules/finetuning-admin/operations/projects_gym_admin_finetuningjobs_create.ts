import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (params: operations["projects_gym_admin_finetuningjobs_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["projects_gym_admin_finetuningjobs_create"]["responses"]["201"]["content"]["application/json"]> => {
  return client.call({
    method: "post",
    url: `/projects/gym/admin/finetuningjobs/`,
    data: params,
    ...options
  })
}