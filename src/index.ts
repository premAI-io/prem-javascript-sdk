import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from "axios"

import EmbeddingModule from "$modules/embeddings"
import ChatCompletionModule from "$modules/chat/completions"
import DataPointModule from "$modules/datapoints"
import { PremBaseConfig } from "$types/index"

export default class Prem {
  config: PremBaseConfig & { baseUrl: string }
  axios: Axios

  embeddings: EmbeddingModule
  datapoints: DataPointModule
  chat: {
    completions: ChatCompletionModule
  }

  constructor(config: PremBaseConfig, axiosConfig?: CreateAxiosDefaults) {
    this.config = Object.assign({ baseUrl: "https://app.premai.io" }, config)

    this.axios = axios.create(axiosConfig)

    this.axios.defaults.baseURL = this.config.baseUrl
    this.axios.defaults.headers.common["Authorization"] = `Bearer ${this.config.apiKey}`

    this.embeddings = new EmbeddingModule(this)
    this.datapoints = new DataPointModule(this)
    this.chat = {
      completions: new ChatCompletionModule(this)
    }
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
