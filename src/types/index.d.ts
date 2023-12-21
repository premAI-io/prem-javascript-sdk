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
  data: null
}

// EMBEDDING - CREATE

export type CreateEmbeddingRequest = api.EmbeddingsInput
export type CreateEmbeddingResponse = api.EmbeddingsResponse

// DATAPOINT - CREATE
export type CreateDataPointRequest = Omit<api.DataPoint, "id" | "created_at" | "updated_at">
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


