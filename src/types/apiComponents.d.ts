/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/**
 * This file was automatically generated by openapi2ts.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source
 * openapi definition and regenerate this file.
 */
export type APIResponseValidationError = {
  message: string
  /**
   * * `APIResponseValidationError` - APIResponseValidationError
   */
  code: "APIResponseValidationError"
  [k: string]: unknown
}

/**
 * * `APIResponseValidationError` - APIResponseValidationError
 */
export type APIResponseValidationErrorCodeEnum = "APIResponseValidationError"

export type AuthenticationError = {
  message: string
  /**
   * * `AuthenticationError` - AuthenticationError
   */
  code: "AuthenticationError"
  [k: string]: unknown
}

/**
 * * `AuthenticationError` - AuthenticationError
 */
export type AuthenticationErrorCodeEnum = "AuthenticationError"

export type BlankEnum = ""

export type CatchAllError = {
  message: string
  /**
   * * `CatchAllError` - CatchAllError
   */
  code: "CatchAllError"
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
   * The ID of the session to use. It helps to track the chat history.
   */
  session_id?: string
  /**
   * Options for Retrieval Augmented Generation (RAG). Will override launched model settings
   */
  repositories?: {
    /**
     * The IDs of the repositories to use.
     */
    ids?: number[]
    limit?: number
    similarity_threshold?: number
    [k: string]: unknown
  }
  /**
   * A list of messages comprising the conversation so far.
   */
  messages: {
    /**
     * The role of the sender (e.g., 'user' or 'assistant').
     *
     * * `user` - user
     * * `assistant` - assistant
     */
    role: "user" | "assistant"
    /**
     * The content of the message.
     */
    content: string
    [k: string]: unknown
  }[]
  /**
   * ID of the model to use. See the model endpoint compatibility table for details.
   */
  model?: string
  /**
   * The system prompt to use.
   */
  system_prompt?: string
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
   * A list of chat completion choices. Can be more than one if n is greater than 1.
   */
  choices: {
    /**
     * The index of the choice in the list of choices.
     */
    index: number
    /**
     * The messages in the chat completion.
     */
    message: {
      /**
       * The role of the sender (e.g., 'user' or 'assistant').
       *
       * * `user` - user
       * * `assistant` - assistant
       */
      role: "user" | "assistant"
      /**
       * The content of the message.
       */
      content: string
      [k: string]: unknown
    }
    /**
     * The reason the chat completion finished, e.g., 'stop' or 'length'.
     */
    finish_reason: string
    [k: string]: unknown
  }[]
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
   * Chunks used to improve the completion
   */
  document_chunks?: {
    repository_id?: number
    document_id?: number
    chunk_id?: number
    document_name?: string
    similarity_score?: number
    content?: string
    [k: string]: unknown
  }[]
  /**
   * The usage statistics for the completion.
   */
  usage: {
    prompt_tokens: number
    completion_tokens?: number
    total_tokens: number
    [k: string]: unknown
  }
  /**
   * The trace ID of the completion.
   */
  trace_id: string
  [k: string]: unknown
}

export type ConflictError = {
  message: string
  /**
   * * `ConflictError` - ConflictError
   */
  code: "ConflictError"
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

export type DataPointCreateGymAdmin = {
  id?: number
  trace?: string
  input?: string
  output?: string
  positive?: boolean
  [k: string]: unknown
}

export type DataPointGymAdmin = {
  id: number
  [k: string]: unknown
}

export type DataPointRetrieveGymAdmin = {
  id: number
  input?: string
  output?: string
  positive: boolean
  trace?: string
  override_input: boolean & string
  override_output: boolean & string
  [k: string]: unknown
}

export type DataSetCreateGymAdmin = {
  id: number
  project: number
  datapoints: {
    id?: number
    trace?: string
    input?: string
    output?: string
    positive?: boolean
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type DataSetFineTuningJobGymAdmin = {
  id: number
  /**
   * * `unknown` - Unknown
   * * `queued` - Queued
   * * `running` - Running
   * * `succeeded` - Succeeded
   * * `failed` - Failed
   * * `cancelled` - Cancelled
   */
  status?: "unknown" | "queued" | "running" | "succeeded" | "failed" | "cancelled"
  [k: string]: unknown
}

export type DataSetFineTuningRequest = {
  id: number
  /**
   * * `queued` - Queued
   * * `finetuning` - Fine tuning
   * * `done` - Done
   * * `failed` - Failed
   */
  status?: "queued" | "finetuning" | "done" | "failed"
  [k: string]: unknown
}

export type DataSetGymAdmin = {
  id: number
  project: {
    id: number
    name: string
    description?: string
    [k: string]: unknown
  }
  training_finetuning_requests: {
    id: number
    /**
     * * `queued` - Queued
     * * `finetuning` - Fine tuning
     * * `done` - Done
     * * `failed` - Failed
     */
    status?: "queued" | "finetuning" | "done" | "failed"
    [k: string]: unknown
  }[]
  training_finetuningjobs: {
    id: number
    /**
     * * `unknown` - Unknown
     * * `queued` - Queued
     * * `running` - Running
     * * `succeeded` - Succeeded
     * * `failed` - Failed
     * * `cancelled` - Cancelled
     */
    status?: "unknown" | "queued" | "running" | "succeeded" | "failed" | "cancelled"
    [k: string]: unknown
  }[]
  datapoints: {
    id: number
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type DataSetProject = {
  id: number
  name: string
  description?: string
  [k: string]: unknown
}

export type DataSetRetrieveGymAdmin = {
  id: number
  project: {
    id: number
    name: string
    description?: string
    [k: string]: unknown
  }
  datapoints: {
    id: number
    input?: string
    output?: string
    positive: boolean
    trace?: string
    override_input: boolean & string
    override_output: boolean & string
    [k: string]: unknown
  }[]
  training_finetuning_requests: {
    id: number
    /**
     * * `queued` - Queued
     * * `finetuning` - Fine tuning
     * * `done` - Done
     * * `failed` - Failed
     */
    status?: "queued" | "finetuning" | "done" | "failed"
    [k: string]: unknown
  }[]
  training_finetuningjobs: {
    id: number
    /**
     * * `unknown` - Unknown
     * * `queued` - Queued
     * * `running` - Running
     * * `succeeded` - Succeeded
     * * `failed` - Failed
     * * `cancelled` - Cancelled
     */
    status?: "unknown" | "queued" | "running" | "succeeded" | "failed" | "cancelled"
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type DocumentChunks = {
  repository_id?: number
  document_id?: number
  chunk_id?: number
  document_name?: string
  similarity_score?: number
  content?: string
  [k: string]: unknown
}

export type DocumentInput = {
  name: string
  content: string
  /**
   * * `pdf` - PDF
   * * `docx` - Word
   * * `txt` - Text
   */
  document_type: "pdf" | "docx" | "txt"
  [k: string]: unknown
}

export type DocumentOutput = {
  repository_id: number
  document_id: number
  name: string
  /**
   * * `pdf` - PDF
   * * `docx` - Word
   * * `txt` - Text
   */
  document_type: "pdf" | "docx" | "txt"
  /**
   * * `PENDING` - Pending
   * * `UPLOADED` - Uploaded
   * * `PARSING` - Parsing
   * * `CHUNKING` - Chunking
   * * `WAITING_FOR_CHUNKS_COMPLETION` - Waiting for chunks completion
   * * `PROCESSING` - Processing
   * * `COMPLETED` - Completed
   * * `FAILED` - Failed
   */
  status:
    | "PENDING"
    | "UPLOADED"
    | "PARSING"
    | "CHUNKING"
    | "WAITING_FOR_CHUNKS_COMPLETION"
    | "PROCESSING"
    | "COMPLETED"
    | "FAILED"
  error: string
  chunk_count: number
  [k: string]: unknown
}

/**
 * * `PENDING` - Pending
 * * `UPLOADED` - Uploaded
 * * `PARSING` - Parsing
 * * `CHUNKING` - Chunking
 * * `WAITING_FOR_CHUNKS_COMPLETION` - Waiting for chunks completion
 * * `PROCESSING` - Processing
 * * `COMPLETED` - Completed
 * * `FAILED` - Failed
 */
export type DocumentOutputStatusEnum =
  | "PENDING"
  | "UPLOADED"
  | "PARSING"
  | "CHUNKING"
  | "WAITING_FOR_CHUNKS_COMPLETION"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"

/**
 * * `pdf` - PDF
 * * `docx` - Word
 * * `txt` - Text
 */
export type DocumentTypeEnum = "pdf" | "docx" | "txt"

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
  /**
   * The model to generate the embeddings.
   */
  model: string
  encoding_format?: ("float" | "base64") & string
  /**
   * Embedding Input
   */
  input: string | string[] | number[] | number[][]
  [k: string]: unknown
}

export type EmbeddingsResponse = {
  /**
   * The embeddings for the input.
   */
  data: {
    /**
     * The index of the token in the input.
     */
    index: number
    /**
     * The embedding for the input.
     */
    embedding: number[]
    [k: string]: unknown
  }[]
  /**
   * The model to generate the embeddings.
   */
  model: string
  /**
   * The usage statistics for the completion.
   */
  usage: {
    prompt_tokens: number
    completion_tokens?: number
    total_tokens: number
    [k: string]: unknown
  }
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

export type Enhancement = {
  /**
   * The IDs of the repositories to use.
   */
  ids?: number[]
  limit?: number
  similarity_threshold?: number
  [k: string]: unknown
}

export type FineTunedModelGymAdmin = {
  id: number
  slug: string
  alias?: string
  model_provider?:
    | (
        | "openai"
        | "azure"
        | "azure-mistral"
        | "cohere"
        | "anthropic"
        | "cloudflare"
        | "deepinfra"
        | "lamini"
        | "octoai"
        | "replicate"
        | "together"
        | "fireworksai"
        | "mistralai"
        | "prem"
        | "anyscale"
        | "openrouter"
        | "perplexity"
        | "groq"
      )
    | ""
    | null
  [k: string]: unknown
}

export type FineTunedModelPromotion = {
  /**
   * Model ID to be promoted
   */
  model: number
  /**
   * Alias for the finetuned model
   */
  alias?: string
  [k: string]: unknown
}

export type FineTuningInput = {
  /**
   * The ID of the project to use.
   */
  project_id: number
  /**
   * ID of the model to use. See the model endpoint compatibility table for details.
   */
  model?: string
  /**
   * The training file.
   */
  training_data: {
    /**
     * The input text.
     */
    input: string
    /**
     * The output text.
     */
    output: string
    [k: string]: unknown
  }[]
  /**
   * The training file.
   */
  validaton_data?: {
    /**
     * The input text.
     */
    input: string
    /**
     * The output text.
     */
    output: string
    [k: string]: unknown
  }[]
  /**
   * The number of epochs to train for.
   */
  num_epochs?: number
  [k: string]: unknown
}

export type FineTuningJobCreateGymAdmin = {
  id: number
  /**
   * Training dataset id to be used for fine-tuning. If omitted, the dataset from the finetuning_request will be used.
   */
  training_dataset?: number
  /**
   * Validation dataset id to be used for fine-tuning
   */
  validation_dataset?: number
  /**
   * Fine-tuning request id to be used for fine-tuning
   */
  fine_tuning_request: number
  /**
   * Hyperparameters for fine-tuning job
   */
  hyperparameters?: {
    /**
     * Number of epochs for fine-tuning
     */
    num_epochs?: number
    [k: string]: unknown
  }
  created_at: string
  updated_at: string
  [k: string]: unknown
}

export type FineTuningJobHyperparameters = {
  /**
   * Number of epochs for fine-tuning
   */
  num_epochs?: number
  [k: string]: unknown
}

export type FineTuningJobOutputGymAdmin = {
  id: number
  job_id: string
  finished_at?: string
  /**
   * * `unknown` - Unknown
   * * `queued` - Queued
   * * `running` - Running
   * * `succeeded` - Succeeded
   * * `failed` - Failed
   * * `cancelled` - Cancelled
   */
  status?: "unknown" | "queued" | "running" | "succeeded" | "failed" | "cancelled"
  fine_tuned_model?: number
  fine_tuning_request?: number
  training_dataset?: number
  validation_dataset?: number
  [k: string]: unknown
}

export type FineTuningMessageCreateGymAdmin = {
  id: number
  fine_tuning_request: number
  title: string
  message: string
  [k: string]: unknown
}

export type FineTuningMessageOutputGymAdmin = {
  id: number
  fine_tuning_request: number
  title: string
  message: string
  user_prompt?: string
  [k: string]: unknown
}

export type FineTuningRequest = {
  id: number
  /**
   * * `queued` - Queued
   * * `finetuning` - Fine tuning
   * * `done` - Done
   * * `failed` - Failed
   */
  status?: "queued" | "finetuning" | "done" | "failed"
  project: {
    id: number
    name: string
    description?: string
    [k: string]: unknown
  }
  model: {
    id: number
    slug: string
    alias?: string
    group?: string
    model_provider?:
      | (
          | "openai"
          | "azure"
          | "azure-mistral"
          | "cohere"
          | "anthropic"
          | "cloudflare"
          | "deepinfra"
          | "lamini"
          | "octoai"
          | "replicate"
          | "together"
          | "fireworksai"
          | "mistralai"
          | "prem"
          | "anyscale"
          | "openrouter"
          | "perplexity"
          | "groq"
        )
      | ""
      | null
    [k: string]: unknown
  }
  dataset: number
  messages: {
    id: number
    title: string
    message: string
    user_prompt?: string
    [k: string]: unknown
  }[]
  current_message: {
    id: number
    title: string
    message: string
    user_prompt?: string
    [k: string]: unknown
  }
  current_fine_tuning_job?: number
  [k: string]: unknown
}

export type FineTuningRequestChangeStateGymAdmin = {
  /**
   * Finetuning_request id to be updated
   */
  fine_tuning_request: number
  /**
   * Updated Fine-tuning request id
   */
  id: number
  [k: string]: unknown
}

export type FineTuningRequestFineTuningMessage = {
  id: number
  title: string
  message: string
  user_prompt?: string
  [k: string]: unknown
}

export type FineTuningRequestModel = {
  id: number
  slug: string
  alias?: string
  group?: string
  model_provider?:
    | (
        | "openai"
        | "azure"
        | "azure-mistral"
        | "cohere"
        | "anthropic"
        | "cloudflare"
        | "deepinfra"
        | "lamini"
        | "octoai"
        | "replicate"
        | "together"
        | "fireworksai"
        | "mistralai"
        | "prem"
        | "anyscale"
        | "openrouter"
        | "perplexity"
        | "groq"
      )
    | ""
    | null
  [k: string]: unknown
}

export type FineTuningRequestProject = {
  id: number
  name: string
  description?: string
  [k: string]: unknown
}

export type FineTuningResponse = {
  /**
   * The ID of the fine-tuning job.
   */
  job_id: string
  [k: string]: unknown
}

export type FineTuningSample = {
  /**
   * The input text.
   */
  input: string
  /**
   * The output text.
   */
  output: string
  [k: string]: unknown
}

export type InputDataPoint = {
  input?: string
  output?: string
  positive: boolean
  trace?: string
  project_id: number
  [k: string]: unknown
}

export type InternalServerError =
  | {
      message: string
      /**
       * * `ProviderInternalServerError` - ProviderInternalServerError
       */
      code: "ProviderInternalServerError"
      [k: string]: unknown
    }
  | {
      message: string
      /**
       * * `APIResponseValidationError` - APIResponseValidationError
       */
      code: "APIResponseValidationError"
      [k: string]: unknown
    }
  | {
      message: string
      /**
       * * `ProviderAPIStatusError` - ProviderAPIStatusError
       */
      code: "ProviderAPIStatusError"
      [k: string]: unknown
    }
  | {
      message: string
      /**
       * * `ProviderAPITimeoutError` - ProviderAPITimeoutError
       */
      code: "ProviderAPITimeoutError"
      [k: string]: unknown
    }
  | {
      message: string
      /**
       * * `ProviderAPIConnectionError` - ProviderAPIConnectionError
       */
      code: "ProviderAPIConnectionError"
      [k: string]: unknown
    }
  | {
      message: string
      /**
       * * `CatchAllError` - CatchAllError
       */
      code: "CatchAllError"
      [k: string]: unknown
    }

export type Message = {
  /**
   * The role of the sender (e.g., 'user' or 'assistant').
   *
   * * `user` - user
   * * `assistant` - assistant
   */
  role: "user" | "assistant"
  /**
   * The content of the message.
   */
  content: string
  [k: string]: unknown
}

export type Model = {
  id: number
  name: string
  /**
   * * `text2text` - Text to Text
   * * `text2image` - Text to Image
   * * `text2vector` - Text to Vector
   */
  model_type?: "text2text" | "text2image" | "text2vector"
  model_provider?:
    | (
        | "openai"
        | "azure"
        | "azure-mistral"
        | "cohere"
        | "anthropic"
        | "cloudflare"
        | "deepinfra"
        | "lamini"
        | "octoai"
        | "replicate"
        | "together"
        | "fireworksai"
        | "mistralai"
        | "prem"
        | "anyscale"
        | "openrouter"
        | "perplexity"
        | "groq"
      )
    | ""
    | null
  [k: string]: unknown
}

export type ModelNotFoundError = {
  message: string
  /**
   * * `ModelNotFoundError` - ModelNotFoundError
   */
  code: "ModelNotFoundError"
  [k: string]: unknown
}

/**
 * * `ModelNotFoundError` - ModelNotFoundError
 */
export type ModelNotFoundErrorCodeEnum = "ModelNotFoundError"

/**
 * * `openai` - OpenAI
 * * `azure` - Azure OpenAI
 * * `azure-mistral` - Azure Mistral
 * * `cohere` - Cohere
 * * `anthropic` - Anthropic
 * * `cloudflare` - Cloudflare
 * * `deepinfra` - Deep Infra
 * * `lamini` - Lamini
 * * `octoai` - Octo AI
 * * `replicate` - Replicate
 * * `together` - Together
 * * `fireworksai` - Fireworks AI
 * * `mistralai` - Mistral AI
 * * `prem` - Prem AI
 * * `anyscale` - Anyscale
 * * `openrouter` - Open Router
 * * `perplexity` - Perplexity
 * * `groq` - Groq
 */
export type ModelProviderEnum =
  | "openai"
  | "azure"
  | "azure-mistral"
  | "cohere"
  | "anthropic"
  | "cloudflare"
  | "deepinfra"
  | "lamini"
  | "octoai"
  | "replicate"
  | "together"
  | "fireworksai"
  | "mistralai"
  | "prem"
  | "anyscale"
  | "openrouter"
  | "perplexity"
  | "groq"

/**
 * * `text2text` - Text to Text
 * * `text2image` - Text to Image
 * * `text2vector` - Text to Vector
 */
export type ModelTypeEnum = "text2text" | "text2image" | "text2vector"

export type NotFoundError =
  | {
      message: string
      /**
       * * `ProviderNotFoundError` - ProviderNotFoundError
       */
      code: "ProviderNotFoundError"
      [k: string]: unknown
    }
  | {
      message: string
      /**
       * * `ModelNotFoundError` - ModelNotFoundError
       */
      code: "ModelNotFoundError"
      [k: string]: unknown
    }

export type NullEnum = null

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
  /**
   * * `PermissionDeniedError` - PermissionDeniedError
   */
  code: "PermissionDeniedError"
  [k: string]: unknown
}

/**
 * * `PermissionDeniedError` - PermissionDeniedError
 */
export type PermissionDeniedErrorCodeEnum = "PermissionDeniedError"

export type ProviderAPIConnectionError = {
  message: string
  /**
   * * `ProviderAPIConnectionError` - ProviderAPIConnectionError
   */
  code: "ProviderAPIConnectionError"
  [k: string]: unknown
}

/**
 * * `ProviderAPIConnectionError` - ProviderAPIConnectionError
 */
export type ProviderAPIConnectionErrorCodeEnum = "ProviderAPIConnectionError"

export type ProviderAPIStatusError = {
  message: string
  /**
   * * `ProviderAPIStatusError` - ProviderAPIStatusError
   */
  code: "ProviderAPIStatusError"
  [k: string]: unknown
}

/**
 * * `ProviderAPIStatusError` - ProviderAPIStatusError
 */
export type ProviderAPIStatusErrorCodeEnum = "ProviderAPIStatusError"

export type ProviderAPITimeoutError = {
  message: string
  /**
   * * `ProviderAPITimeoutError` - ProviderAPITimeoutError
   */
  code: "ProviderAPITimeoutError"
  [k: string]: unknown
}

/**
 * * `ProviderAPITimeoutError` - ProviderAPITimeoutError
 */
export type ProviderAPITimeoutErrorCodeEnum = "ProviderAPITimeoutError"

export type ProviderInternalServerError = {
  message: string
  /**
   * * `ProviderInternalServerError` - ProviderInternalServerError
   */
  code: "ProviderInternalServerError"
  [k: string]: unknown
}

/**
 * * `ProviderInternalServerError` - ProviderInternalServerError
 */
export type ProviderInternalServerErrorCodeEnum = "ProviderInternalServerError"

export type ProviderNotFoundError = {
  message: string
  /**
   * * `ProviderNotFoundError` - ProviderNotFoundError
   */
  code: "ProviderNotFoundError"
  [k: string]: unknown
}

/**
 * * `ProviderNotFoundError` - ProviderNotFoundError
 */
export type ProviderNotFoundErrorCodeEnum = "ProviderNotFoundError"

export type RateLimitError = {
  message: string
  /**
   * * `RateLimitError` - RateLimitError
   */
  code: "RateLimitError"
  [k: string]: unknown
}

/**
 * * `RateLimitError` - RateLimitError
 */
export type RateLimitErrorCodeEnum = "RateLimitError"

export type ResponseChoice = {
  /**
   * The index of the choice in the list of choices.
   */
  index: number
  /**
   * The messages in the chat completion.
   */
  message: {
    /**
     * The role of the sender (e.g., 'user' or 'assistant').
     *
     * * `user` - user
     * * `assistant` - assistant
     */
    role: "user" | "assistant"
    /**
     * The content of the message.
     */
    content: string
    [k: string]: unknown
  }
  /**
   * The reason the chat completion finished, e.g., 'stop' or 'length'.
   */
  finish_reason: string
  [k: string]: unknown
}

export type RetrieveFineTuningResponse = {
  /**
   * The ID of the fine-tuning job.
   */
  id: string
  /**
   * The ID of the fine-tuned model.
   */
  fine_tuned_model: string
  /**
   * The Unix timestamp (in seconds) of when the fine-tuning job was created.
   */
  created_at: number
  /**
   * The Unix timestamp (in seconds) of when the fine-tuning job was finished.
   */
  finished_at?: number
  /**
   * The status of the fine-tuning job.
   */
  status: string
  /**
   * The error message of the fine-tuning job.
   */
  error?: string
  /**
   * The name of the provider that generated the completion.
   */
  provider_name: string
  /**
   * The ID of the provider that generated the completion.
   */
  provider_id: string
  /**
   * The status code of the fine-tuning job.
   */
  status_code: number
  [k: string]: unknown
}

/**
 * * `user` - user
 * * `assistant` - assistant
 */
export type RoleEnum = "user" | "assistant"

/**
 * * `unknown` - Unknown
 * * `queued` - Queued
 * * `running` - Running
 * * `succeeded` - Succeeded
 * * `failed` - Failed
 * * `cancelled` - Cancelled
 */
export type StatusC4AEnum = "unknown" | "queued" | "running" | "succeeded" | "failed" | "cancelled"

/**
 * * `queued` - Queued
 * * `finetuning` - Fine tuning
 * * `done` - Done
 * * `failed` - Failed
 */
export type StatusD09Enum = "queued" | "finetuning" | "done" | "failed"

export type UnprocessableEntityError = {
  message: string
  /**
   * * `UnprocessableEntityError` - UnprocessableEntityError
   */
  code: "UnprocessableEntityError"
  [k: string]: unknown
}

/**
 * * `UnprocessableEntityError` - UnprocessableEntityError
 */
export type UnprocessableEntityErrorCodeEnum = "UnprocessableEntityError"

export type Usage = {
  prompt_tokens: number
  completion_tokens?: number
  total_tokens: number
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
    [k: string]: {
      /**
       * Error messages for the field.
       */
      error_messages: {
        [k: string]: unknown
      }[]
      [k: string]: unknown
    }
  }
  /**
   * * `ValidationError` - ValidationError
   */
  code: "ValidationError"
  [k: string]: unknown
}

/**
 * * `ValidationError` - ValidationError
 */
export type ValidationErrorCodeEnum = "ValidationError"
