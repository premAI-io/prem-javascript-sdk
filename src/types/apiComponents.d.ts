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
    content?:
      | string
      | {
          type: "text" | "image_url"
          text?: string
          image_url?: {
            url: string
            [k: string]: unknown
          }
          [k: string]: unknown
        }[]
    /**
     * The ID of the template to use.
     */
    template_id?: string
    /**
     * The parameters (key: value) to use with the given template.
     */
    params?: {
      [k: string]: unknown
    }
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
   * The maximum number of tokens to generate in the chat completion.
   */
  max_tokens?: number
  /**
   * If set, partial message deltas will be sent, like in ChatGPT.
   */
  stream?: boolean
  /**
   * What sampling temperature to use, between 0 and 2.
   */
  temperature?: number
  /**
   * The tools to use in the completion.
   */
  tools?: {
    /**
     * * `function` - function
     */
    type: "function"
    function: {
      name: string
      description?: string
      parameters: {
        type: string
        properties: {
          [k: string]: {
            type: string
            description: string
            [k: string]: unknown
          }
        }
        required: string[]
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    [k: string]: unknown
  }[]
  /**
   * The format of the response. Can be a JSON schema or a simple `json_object` type
   */
  response_format?: {
    [k: string]: unknown
  }
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
      content?:
        | string
        | {
            type: "text" | "image_url"
            text?: string
            image_url?: {
              url: string
              [k: string]: unknown
            }
            [k: string]: unknown
          }[]
      /**
       * The ID of the template to use.
       */
      template_id?: string
      /**
       * The parameters (key: value) to use with the given template.
       */
      params?: {
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    /**
     * The reason the chat completion finished, e.g., 'stop' or 'length'.
     */
    finish_reason: string
    /**
     * The tool calls made.
     */
    tool_calls?: {
      /**
       * The ID of the tool call.
       */
      id: string
      /**
       * The function called.
       */
      function: {
        /**
         * The name of the function to be called.
         */
        name: string
        /**
         * The arguments passed to the function.
         */
        arguments?: {
          [k: string]: unknown
        }
        [k: string]: unknown
      }
      /**
       * The type of tool call.
       */
      type: string
      [k: string]: unknown
    }[]
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

export type Datapoint = {
  messages: {
    /**
     * * `user` - user
     * * `assistant` - assistant
     * * `system` - system
     */
    role?: "user" | "assistant" | "system"
    content?: string
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type DeleteFinetuningJobRequest = {
  /**
   * The ID of the project
   */
  project_id: number
  /**
   * The ID of the finetuning job to delete
   */
  fine_tuning_job_id: number
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
  file: string
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
   * * `INDEXING` - Indexing
   * * `COMPLETED` - Completed
   * * `FAILED` - Failed
   */
  status: "PENDING" | "UPLOADED" | "INDEXING" | "COMPLETED" | "FAILED"
  error: string
  chunk_count: number
  [k: string]: unknown
}

/**
 * * `pdf` - PDF
 * * `docx` - Word
 * * `txt` - Text
 */
export type DocumentTypeEnum = "pdf" | "docx" | "txt"

export type DownloadFinetunedModelRequest = {
  /**
   * The ID of the project
   */
  project_id: number
  /**
   * The ID of the finetuned job to download
   */
  fine_tuning_job_id: number
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

export type FeedbackCreate = {
  feedback?: {
    positive?: boolean
    messages?: {
      /**
       * * `user` - user
       * * `assistant` - assistant
       * * `system` - system
       */
      role?: "user" | "assistant" | "system"
      content?: string
      [k: string]: unknown
    }[]
    [k: string]: unknown
  }
  [k: string]: unknown
}

export type FeedbackCreateFeedback = {
  positive?: boolean
  messages?: {
    /**
     * * `user` - user
     * * `assistant` - assistant
     * * `system` - system
     */
    role?: "user" | "assistant" | "system"
    content?: string
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type FineTuningJobCreate = {
  /**
   * The id of the project to use for finetuning
   */
  project_id: number
  /**
   * Name of the fine-tuning job
   */
  name?: string
  /**
   * The slug of the base model to use for finetuning
   */
  base_model: string
  /**
   * The datapoints to use for finetuning
   */
  datapoints: {
    messages: {
      /**
       * * `user` - user
       * * `assistant` - assistant
       * * `system` - system
       */
      role?: "user" | "assistant" | "system"
      content?: string
      [k: string]: unknown
    }[]
    [k: string]: unknown
  }[]
  /**
   * Hyperparameters for fine-tuning job
   */
  hyperparameters: {
    /**
     * Batch size for fine-tuning
     */
    batch_size: number
    /**
     * Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.
     */
    learning_rate_multiplier: number
    /**
     * Number of epochs for fine-tuning
     */
    num_epochs: number
    [k: string]: unknown
  }
  /**
   * Synthetic datageneration parameters for fine-tuning job
   */
  synthetic_datageneration_parameters: {
    /**
     * Whether to run synthetic datageneration
     */
    run_synthetic_datageneration: boolean
    /**
     * Minimum number of datapoints required for fine-tuning
     */
    min_num_datapoints_for_ft: number
    /**
     * Temperature for synthetic datageneration
     */
    temperature: number
    /**
     * Positive instructions for synthetic datageneration, what the datapoints should be about
     */
    positive_instructions: string
    /**
     * Negative instructions for synthetic datageneration, what the datapoints should not be about
     */
    negative_instructions: string
    [k: string]: unknown
  }
  [k: string]: unknown
}

export type FineTuningJobCreateResponse = {
  successful: string
  job_id: number
  job_status: string
  [k: string]: unknown
}

export type FineTuningJobHyperparameters = {
  /**
   * Batch size for fine-tuning
   */
  batch_size: number
  /**
   * Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.
   */
  learning_rate_multiplier: number
  /**
   * Number of epochs for fine-tuning
   */
  num_epochs: number
  [k: string]: unknown
}

export type FineTuningJobSyntheticDatagenerationParameters = {
  /**
   * Whether to run synthetic datageneration
   */
  run_synthetic_datageneration: boolean
  /**
   * Minimum number of datapoints required for fine-tuning
   */
  min_num_datapoints_for_ft: number
  /**
   * Temperature for synthetic datageneration
   */
  temperature: number
  /**
   * Positive instructions for synthetic datageneration, what the datapoints should be about
   */
  positive_instructions: string
  /**
   * Negative instructions for synthetic datageneration, what the datapoints should not be about
   */
  negative_instructions: string
  [k: string]: unknown
}

export type Function = {
  name: string
  description?: string
  parameters: {
    type: string
    properties: {
      [k: string]: {
        type: string
        description: string
        [k: string]: unknown
      }
    }
    required: string[]
    [k: string]: unknown
  }
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
  content?:
    | string
    | {
        type: "text" | "image_url"
        text?: string
        image_url?: {
          url: string
          [k: string]: unknown
        }
        [k: string]: unknown
      }[]
  /**
   * The ID of the template to use.
   */
  template_id?: string
  /**
   * The parameters (key: value) to use with the given template.
   */
  params?: {
    [k: string]: unknown
  }
  [k: string]: unknown
}

/**
 * * `user` - user
 * * `assistant` - assistant
 */
export type MessageRoleEnum = "user" | "assistant"

export type Messages = {
  /**
   * * `user` - user
   * * `assistant` - assistant
   * * `system` - system
   */
  role?: "user" | "assistant" | "system"
  content?: string
  [k: string]: unknown
}

/**
 * * `user` - user
 * * `assistant` - assistant
 * * `system` - system
 */
export type MessagesRoleEnum = "user" | "assistant" | "system"

export type Model = {
  id: number
  name: string
  /**
   * * `text2text` - Text to Text
   * * `text2image` - Text to Image
   * * `text2vector` - Text to Vector
   */
  model_type?: "text2text" | "text2image" | "text2vector"
  model_provider?: ("openai" | "azure" | "anthropic" | "prem" | "groq" | "proxy-prem-ai") | "" | null
  deprecated?: boolean
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
 * * `anthropic` - Anthropic
 * * `prem` - Prem AI
 * * `groq` - Groq
 * * `proxy-prem-ai` - Proxy Prem AI
 */
export type ModelProviderEnum = "openai" | "azure" | "anthropic" | "prem" | "groq" | "proxy-prem-ai"

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

export type OutputFunction = {
  /**
   * The name of the function to be called.
   */
  name: string
  /**
   * The arguments passed to the function.
   */
  arguments?: {
    [k: string]: unknown
  }
  [k: string]: unknown
}

export type ParameterProperties = {
  type: string
  description: string
  [k: string]: unknown
}

export type Parameters = {
  type: string
  properties: {
    [k: string]: {
      type: string
      description: string
      [k: string]: unknown
    }
  }
  required: string[]
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

export type ID = number

export type Project = {
  project_id: ID
  name: string
  description?: string
  [k: string]: unknown
}

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

export type Repository = {
  id: number
  name: string
  description?: string
  organization: string
  [k: string]: unknown
}

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
    content?:
      | string
      | {
          type: "text" | "image_url"
          text?: string
          image_url?: {
            url: string
            [k: string]: unknown
          }
          [k: string]: unknown
        }[]
    /**
     * The ID of the template to use.
     */
    template_id?: string
    /**
     * The parameters (key: value) to use with the given template.
     */
    params?: {
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  /**
   * The reason the chat completion finished, e.g., 'stop' or 'length'.
   */
  finish_reason: string
  /**
   * The tool calls made.
   */
  tool_calls?: {
    /**
     * The ID of the tool call.
     */
    id: string
    /**
     * The function called.
     */
    function: {
      /**
       * The name of the function to be called.
       */
      name: string
      /**
       * The arguments passed to the function.
       */
      arguments?: {
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    /**
     * The type of tool call.
     */
    type: string
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

/**
 * * `PENDING` - Pending
 * * `UPLOADED` - Uploaded
 * * `INDEXING` - Indexing
 * * `COMPLETED` - Completed
 * * `FAILED` - Failed
 */
export type StatusEnum = "PENDING" | "UPLOADED" | "INDEXING" | "COMPLETED" | "FAILED"

export type Tool = {
  /**
   * * `function` - function
   */
  type: "function"
  function: {
    name: string
    description?: string
    parameters: {
      type: string
      properties: {
        [k: string]: {
          type: string
          description: string
          [k: string]: unknown
        }
      }
      required: string[]
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  [k: string]: unknown
}

export type ToolCall = {
  /**
   * The ID of the tool call.
   */
  id: string
  /**
   * The function called.
   */
  function: {
    /**
     * The name of the function to be called.
     */
    name: string
    /**
     * The arguments passed to the function.
     */
    arguments?: {
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  /**
   * The type of tool call.
   */
  type: string
  [k: string]: unknown
}

export type TraceFeedback = {
  positive: boolean
  used_datapoint_messages: boolean
  messages: {
    /**
     * * `user` - user
     * * `assistant` - assistant
     * * `system` - system
     */
    role?: "user" | "assistant" | "system"
    content?: string
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type TraceList = {
  trace_id: string
  project_id: number
  model_id: number
  messages?: {
    /**
     * * `user` - user
     * * `assistant` - assistant
     * * `system` - system
     */
    role?: "user" | "assistant" | "system"
    content?: string
    [k: string]: unknown
  }[]
  feedback: {
    positive: boolean
    used_datapoint_messages: boolean
    messages: {
      /**
       * * `user` - user
       * * `assistant` - assistant
       * * `system` - system
       */
      role?: "user" | "assistant" | "system"
      content?: string
      [k: string]: unknown
    }[]
    [k: string]: unknown
  }
  [k: string]: unknown
}

export type ID = number
export type ID1 = number

export type TraceRetrieve = {
  trace_id: string
  project: {
    project_id: ID
    name: string
    description?: string
    [k: string]: unknown
  }
  model: {
    id: number
    name: string
    /**
     * * `text2text` - Text to Text
     * * `text2image` - Text to Image
     * * `text2vector` - Text to Vector
     */
    model_type?: "text2text" | "text2image" | "text2vector"
    model_provider?: ("openai" | "azure" | "anthropic" | "prem" | "groq" | "proxy-prem-ai") | "" | null
    deprecated?: boolean
    [k: string]: unknown
  }
  session_id?: string
  messages?: {
    /**
     * * `user` - user
     * * `assistant` - assistant
     * * `system` - system
     */
    role?: "user" | "assistant" | "system"
    content?: string
    [k: string]: unknown
  }[]
  feedback: {
    positive: boolean
    used_datapoint_messages: boolean
    messages: {
      /**
       * * `user` - user
       * * `assistant` - assistant
       * * `system` - system
       */
      role?: "user" | "assistant" | "system"
      content?: string
      [k: string]: unknown
    }[]
    [k: string]: unknown
  }
  document_chunks?: {
    document_id: ID1
    content?: string
    [k: string]: unknown
  }[]
  [k: string]: unknown
}

export type ID = number

export type TraceRetrieveDocumentChunk = {
  document_id: ID
  content?: string
  [k: string]: unknown
}

/**
 * * `function` - function
 */
export type TypeEnum = "function"

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
