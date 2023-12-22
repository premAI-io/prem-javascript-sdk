import * as api from "./api"
import type { AxiosRequestConfig } from "axios"

export type PremBaseConfig = {
  baseUrl?: string,
  apiKey: string
}

// CHAT COMPLETION - CREATE

export type CreateChatCompletionRequest = api.ChatCompletionInput
export type CreateChatCompletionResponse = api.ChatCompletionResponse

export type ChatCompletionStreamingCompletionData = {
  id: string,
  model: string,
  object: string,
  created: number,
  choices: {
    finish_reason: string | null,
    delta: {
      content: string,
      role: string | null
    }
  }[]
}

export type ChatCompletionStreamingMessage = {
  event: "completion",
  data: ChatCompletionStreamingCompletionData
} | {
  event: "done",
  data: string // trace id
}

// EMBEDDING - CREATE

export type CreateEmbeddingRequest = api.EmbeddingsInput
export type CreateEmbeddingResponse = api.EmbeddingsResponse

// DATAPOINT - CREATE
export type CreateDataPointRequest = api.InputDataPoint & ({ trace: string, project?: undefined } | { trace?: undefined, project: number })
export type CreateDataPointResponse = api.DataPoint

// DATAPOINT - RETRIEVE
export type RetrieveDataPointResponse = api.DataPoint

// DATAPOINT - LIST
export type ListDataPointResponse = api.DataPoint[]

// DATAPOINT - UPDATE
export type UpdateDataPointResponse = api.DataPoint
export type UpdateDataPointRequest = {
  input?: string
  output?: string
  positive?: boolean
  trace?: string
}


// ERRORS

export type ProviderInternalServerError = api.ProviderInternalServerError
export type APIResponseValidationError = api.APIResponseValidationError
export type ProviderAPIStatusError = api.ProviderAPIStatusError
export type ProviderAPITimeoutError = api.ProviderAPITimeoutError
export type ProviderAPIConnectionError = api.ProviderAPIConnectionError
export type CatchAllError = api.CatchAllError
export type AuthenticationError = api.AuthenticationError
export type ConflictError = api.ConflictError
export type InternalServerError = api.InternalServerError
export type ModelNotFoundError = api.ModelNotFoundError
export type NotFoundError = api.NotFoundError
export type PermissionDeniedError = api.PermissionDeniedError
export type ValidationError = api.ValidationError
