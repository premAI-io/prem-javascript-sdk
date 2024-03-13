import * as components from "./apiComponents"
import type { AxiosRequestConfig } from "axios"

export type PremBaseConfig = {
  baseUrl?: string,
  apiKey: string
}

// CHAT COMPLETION - CREATE

export type CreateChatCompletionRequest = components.ChatCompletionInput
export type CreateChatCompletionResponse = components.ChatCompletionResponse

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

export type DocumentChunk = {
  repository_id?: number;
  document_id?: number;
  chunk_id?: string;
  document_name?: string;
  /** Format: double */
  similarity_score?: number;
  content?: string;
}

export type ChatCompletionStreamingMessage = {
  event: "completion",
  data: ChatCompletionStreamingCompletionData
} | {
  event: "done",
  data: {
    traceId: string,
    documentChunks: DocumentChunk[]
  }
}

// EMBEDDING - CREATE

export type CreateEmbeddingRequest = components.EmbeddingsInput
export type CreateEmbeddingResponse = components.EmbeddingsResponse

// DATAPOINT - CREATE
export type CreateDataPointRequest = components.InputDataPoint
export type CreateDataPointResponse = components.DataPoint

// DATAPOINT - RETRIEVE
export type RetrieveDataPointResponse = components.DataPoint

// DATAPOINT - LIST
export type ListDataPointResponse = components.DataPoint[]

// DATAPOINT - UPDATE
export type UpdateDataPointResponse = components.DataPoint
export type UpdateDataPointRequest = {
  input?: string
  output?: string
  positive?: boolean
  trace?: string
}


// ERRORS

export type ProviderInternalServerError = components.ProviderInternalServerError
export type APIResponseValidationError = components.APIResponseValidationError
export type ProviderAPIStatusError = components.ProviderAPIStatusError
export type ProviderAPITimeoutError = components.ProviderAPITimeoutError
export type ProviderAPIConnectionError = components.ProviderAPIConnectionError
export type CatchAllError = components.CatchAllError
export type AuthenticationError = components.AuthenticationError
export type ConflictError = components.ConflictError
export type InternalServerError = components.InternalServerError
export type ModelNotFoundError = components.ModelNotFoundError
export type NotFoundError = components.NotFoundError
export type PermissionDeniedError = components.PermissionDeniedError
export type ValidationError = components.ValidationError
