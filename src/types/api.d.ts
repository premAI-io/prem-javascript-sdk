export type APIResponseValidationError = {
  message: string
  code: APIResponseValidationErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `APIResponseValidationError` - APIResponseValidationError
 */
export type APIResponseValidationErrorCodeEnum = "APIResponseValidationError"

export type AuthToken = {
  username: string
  password: string
  token: string
  [k: string]: unknown
}

export type AuthenticationError = {
  message: string
  code: AuthenticationErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `AuthenticationError` - AuthenticationError
 */
export type AuthenticationErrorCodeEnum = "AuthenticationError"

export type CatchAllError = {
  message: string
  code: CatchAllErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `CatchAllError` - CatchAllError
 */
export type CatchAllErrorCodeEnum = "CatchAllError"

export type ChatCompletionInput = {
  /**
   * The ID of the project to use.
   */
  project_id: number
  /**
   * A list of messages comprising the conversation so far.
   */
  messages: Message[]
  /**
   * ID of the model to use. See the model endpoint compatibility table for details.
   */
  model?: string
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency.
   */
  frequency_penalty?: number
  /**
   * JSON object that maps tokens to an associated bias value from -100 to 100.
   */
  logit_bias?: {
    [k: string]: unknown
  }
  /**
   * The maximum number of tokens to generate in the chat completion.
   */
  max_tokens?: number
  /**
   * How many chat completion choices to generate for each input message.
   */
  n?: number
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far.
   */
  presence_penalty?: number
  /**
   * An object specifying the format that the model must output.
   */
  response_format?: {
    [k: string]: unknown
  }
  /**
   * This feature is in Beta. If specified, our system will make a best effort to sample deterministically.
   */
  seed?: number
  /**
   * Up to 4 sequences where the API will stop generating further tokens.
   */
  stop?: string
  /**
   * If set, partial message deltas will be sent, like in ChatGPT.
   */
  stream?: boolean
  /**
   * What sampling temperature to use, between 0 and 2.
   */
  temperature?: number
  /**
   * An alternative to sampling with temperature, called nucleus sampling.
   */
  top_p?: number
  /**
   * A list of tools the model may call. Currently, only functions are supported as a tool.
   */
  tools?: {
    [k: string]: unknown
  }[]
  /**
   * A unique identifier representing your end-user.
   */
  user?: string
  [k: string]: unknown
}

export type ChatCompletionResponse = {
  /**
   * A unique identifier for the chat completion. Each chunk has the same ID.
   */
  id: string
  /**
   * A list of chat completion choices. Can be more than one if n is greater than 1.
   */
  choices: ResponseChoice[]
  /**
   * The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp.
   */
  created: number
  /**
   * The model to generate the completion.
   */
  model: string
  /**
   * The name of the provider that generated the completion.
   */
  provider_name: string
  /**
   * The ID of the provider that generated the completion.
   */
  provider_id: string
  /**
   * The usage statistics for the completion.
   */
  usage?: Usage
  [k: string]: unknown
}

export type ConflictError = {
  message: string
  code: ConflictErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ConflictError` - ConflictError
 */
export type ConflictErrorCodeEnum = "ConflictError"

export type DataPoint = {
  id: number
  created_at: string
  updated_at: string
  input?: string
  output?: string
  positive: boolean
  trace?: string
  [k: string]: unknown
}

export type Embedding = {
  /**
   * The index of the token in the input.
   */
  index: number
  /**
   * The embedding for the input.
   */
  embedding: number[]
  [k: string]: unknown
}

export type EmbeddingsInput = {
  /**
   * The ID of the project to use.
   */
  project_id: number
  model: string
  encoding_format?: EncodingFormatEnum & string
  /**
   * Embedding Input
   */
  input: (string | string[] | number[] | number[][])[]
  [k: string]: unknown
}

export type EmbeddingsResponse = {
  /**
   * The embeddings for the input.
   */
  data: Embedding[]
  /**
   * The model to generate the embeddings.
   */
  model: string
  /**
   * The usage statistics for the completion.
   */
  usage?: Usage
  /**
   * The name of the provider that generated the completion.
   */
  provider_name: string
  /**
   * The ID of the provider that generated the completion.
   */
  provider_id: string
  [k: string]: unknown
}

/**
 * * `float` - float
 * * `base64` - base64
 */
export type EncodingFormatEnum = "float" | "base64"

export type InputDataPoint = {
  input: string
  output: string
  positive: boolean
  [k: string]: unknown
}

export type InternalServerError =
  | ProviderInternalServerError
  | APIResponseValidationError
  | ProviderAPIStatusError
  | ProviderAPITimeoutError
  | ProviderAPIConnectionError
  | CatchAllError

export type Message = {
  /**
   * The role of the sender (e.g., 'user' or 'system').
   *
   * * `user` - user
   * * `system` - system
   */
  role: RoleEnum
  /**
   * The content of the message.
   */
  content: string
  [k: string]: unknown
}

export type ModelNotFoundError = {
  message: string
  code: ModelNotFoundErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ModelNotFoundError` - ModelNotFoundError
 */
export type ModelNotFoundErrorCodeEnum = "ModelNotFoundError"

export type NotFoundError = ProviderNotFoundError | ModelNotFoundError

export type PatchedDataPoint = {
  id?: number
  created_at?: string
  updated_at?: string
  input?: string
  output?: string
  positive?: boolean
  trace?: string
  [k: string]: unknown
}

export type PermissionDeniedError = {
  message: string
  code: PermissionDeniedErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `PermissionDeniedError` - PermissionDeniedError
 */
export type PermissionDeniedErrorCodeEnum = "PermissionDeniedError"

export type ProviderAPIConnectionError = {
  message: string
  code: ProviderAPIConnectionErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ProviderAPIConnectionError` - ProviderAPIConnectionError
 */
export type ProviderAPIConnectionErrorCodeEnum = "ProviderAPIConnectionError"

export type ProviderAPIStatusError = {
  message: string
  code: ProviderAPIStatusErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ProviderAPIStatusError` - ProviderAPIStatusError
 */
export type ProviderAPIStatusErrorCodeEnum = "ProviderAPIStatusError"

export type ProviderAPITimeoutError = {
  message: string
  code: ProviderAPITimeoutErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ProviderAPITimeoutError` - ProviderAPITimeoutError
 */
export type ProviderAPITimeoutErrorCodeEnum = "ProviderAPITimeoutError"

export type ProviderInternalServerError = {
  message: string
  code: ProviderInternalServerErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ProviderInternalServerError` - ProviderInternalServerError
 */
export type ProviderInternalServerErrorCodeEnum = "ProviderInternalServerError"

export type ProviderNotFoundError = {
  message: string
  code: ProviderNotFoundErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ProviderNotFoundError` - ProviderNotFoundError
 */
export type ProviderNotFoundErrorCodeEnum = "ProviderNotFoundError"

export type RateLimitError = {
  message: string
  code: RateLimitErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `RateLimitError` - RateLimitError
 */
export type RateLimitErrorCodeEnum = "RateLimitError"

export type  ResponseChoice = {
  /**
   * The generated message in the chat completion choice.
   */
  message: {
    /**
     * The role of the sender (e.g., 'user' or 'system').
     *
     * * `user` - user
     * * `system` - system
     */
    role: RoleEnum
    /**
     * The content of the message.
     */
    content: string,
    tool_calls?: unknown[]
    [k: string]: unknown
  }
  /**
   * The reason the chat completion finished, e.g., 'stop' or 'length'.
   */
  finish_reason: string
  [k: string]: unknown
}

/**
 * * `user` - user
 * * `system` - system
 */
export type RoleEnum = "user" | "system"

export type Trace = {
  id: string
  model_name: string
  created_at: string
  updated_at: string
  is_deleted?: boolean
  start_time: string
  end_time: string
  input_prompt?: string
  input_file_prompt?: string
  input_prompt_tokens_number: number
  endpoint_type?: string
  privacy_score?: string
  output_text?: string
  output_text_tokens_number: number
  http_status_code?: number
  raw_request?: {
    [k: string]: unknown
  }
  raw_response?: {
    [k: string]: unknown
  }
  tag?: string
  error?: string
  text_to_text_model_parameters?: number
  api_key?: number
  [k: string]: unknown
}

export type UnprocessableEntityError = {
  message: string
  code: UnprocessableEntityErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `UnprocessableEntityError` - UnprocessableEntityError
 */
export type UnprocessableEntityErrorCodeEnum = "UnprocessableEntityError"

export type Usage = {
  completion_tokens?: number
  prompt_tokens?: number
  total_tokens?: number
  [k: string]: unknown
}

export type ValidationDetail = {
  /**
   * Error messages for the field.
   */
  error_messages: {
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type ValidationError = {
  /**
   * A description of the validation error.
   */
  message: string
  /**
   * Detailed information about the validation errors.
   */
  details: {
    [k: string]: ValidationDetail
  }
  code: ValidationErrorCodeEnum
  [k: string]: unknown
}

/**
 * * `ValidationError` - ValidationError
 */
export type ValidationErrorCodeEnum = "ValidationError"
