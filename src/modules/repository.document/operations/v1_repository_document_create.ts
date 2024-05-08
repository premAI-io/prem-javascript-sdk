import { AxiosRequestConfig } from "axios"
import Prem from "$src/index"
import type { operations } from "$types/api"
import { createReadStream, existsSync } from "fs"
import FormData from "form-data"

export default (client: Prem) => (repository_id: string, params: operations["v1_repository_document_create"]["requestBody"]["content"]["application/json"], options?: AxiosRequestConfig): Promise<operations["v1_repository_document_create"]["responses"]["201"]["content"]["application/json"]> => {
  const filePath = params.file

  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }

  const formData = new FormData()
  const fileStream = createReadStream(filePath)
  formData.append("file", fileStream)

  return client.call({
    method: "post",
    url: `/v1/repository/${repository_id}/document`,
    data: formData,
    headers: {
      ...(options?.headers || {}),
      ...formData.getHeaders(),
    },
    ...options
  })
}
