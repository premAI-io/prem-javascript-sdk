import axios, { Axios, AxiosError, AxiosRequestConfig, CreateAxiosDefaults } from "axios"
import { PremBaseConfig } from "$types/index"

import repositoriesModule from "$modules/repositories"
import repositorydocumentModule from "$modules/repository.document"
import chatcompletionsModule from "$modules/chat.completions"
import embeddingsModule from "$modules/embeddings"
import v1Module from "$modules/v1"
import modelsModule from "$modules/models"
import feedbacksModule from "$modules/feedbacks"
import tracesModule from "$modules/traces"

export default class Prem {
  config: PremBaseConfig & { baseUrl: string }
  axios: Axios

  repositories = new repositoriesModule(this)
	repository = { document: new repositorydocumentModule(this) }
	chat = { completions: new chatcompletionsModule(this) }
	embeddings = new embeddingsModule(this)
	v1 = new v1Module(this)
	models = new modelsModule(this)
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
