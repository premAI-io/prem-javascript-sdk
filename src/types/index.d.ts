import * as api from "./api"
import type { AxiosRequestConfig } from "axios"

export type PremBaseConfig = {
  baseUrl?: string,
  apiKey: string
}

export type FunctionCall<T, U> = (args: T, config?: AxiosRequestConfig) => Promise<U>

export type CreateChatCompletionRequest = api.ChatCompletionInput
export type CreateChatCompletionResponse = api.ChatCompletionResponse

export type CreateEmbeddingRequest = api.EmbeddingsInput
export type CreateEmbeddingResponse = api.EmbeddingsResponse

// update = new UpdateDataPointRoute(this._client).call
// delete = new DeleteDataPointRoute(this._client).call

export type CreateDataPointRequest = Omit<api.DataPoint, "id" | "created_at" | "updated_at">
export type CreateDataPointResponse = api.DataPoint

export type RetrieveDataPointRequest = { id: number }
export type RetrieveDataPointResponse = api.DataPoint

export type ListDataPointRequest = {}
export type ListDataPointResponse = api.DataPoint[]

export type UpdateDataPointRequest = { id: number } & api.PatchedDataPoint
export type UpdateDataPointResponse = api.DataPoint

export type DeleteDataPointRequest = { id: number }
export type DeleteDataPointResponse = undefined

