import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"

export default (client: Prem) => (sharable_playground_uuid: string, options?: AxiosRequestConfig): Promise<operations["api_playgrounds_ot_info_retrieve"]["responses"]["200"]["content"]["application/json"]> => {
  return client.call({
    method: "get",
    url: `/api/playgrounds/ot-info/${sharable_playground_uuid}`,
    
    ...options
  })
}