import axios, { Axios, AxiosError, AxiosRequestConfig, CreateAxiosDefaults } from "axios"
import { PremBaseConfig } from "$types/index"

import chatcompletionsModule from "$modules/chat.completions"
import embeddingsModule from "$modules/embeddings"
import finetuningModule from "$modules/finetuning"
import modelsModule from "$modules/models"
import repositorydocumentModule from "$modules/repository.document"
import feedbacksModule from "$modules/feedbacks"
import tracesModule from "$modules/traces"

export default class Prem {
  config: PremBaseConfig & { baseUrl: string }
  axios: Axios

  chat = { completions: new chatcompletionsModule(this) }
	embeddings = new embeddingsModule(this)
	finetuning = new finetuningModule(this)
	models = new modelsModule(this)
	repository = { document: new repositorydocumentModule(this) }
	feedbacks = new feedbacksModule(this)
	traces = new tracesModule(this)

  constructor(config: PremBaseConfig, axiosConfig?: CreateAxiosDefaults) {
    this.config = Object.assign({ baseUrl: "https://app.premai.io" }, config)

    this.axios = axios.create(axiosConfig)

    this.axios.defaults.baseURL = this.config.baseUrl
    this.axios.defaults.headers.common["Authorization"] = `Bearer ${this.config.apiKey}`
  }

  call = async<T>(request: AxiosRequestConfig): Promise<T> => {
    try {
      const { data } = await this.axios.request<T>(request)
      return data
    } catch (e) {
      const error = e as AxiosError
      const { response } = error

      if (response?.data) {
        throw response.data
      }

      throw error
    }
  }
}

export type * from "$types/index"
