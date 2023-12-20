import axios, { Axios } from "axios"

import EmbeddingResource from "./resources/embeddings"
import ChatCompletionResource from "./resources/chat/completions"
import DataPointResource from "./resources/datapoints"
import { PremBaseConfig } from "./types"

export default class Prem {
  config: PremBaseConfig & { baseUrl: string }
  axios: Axios

  embeddings: EmbeddingResource
  datapoints: DataPointResource
  chat: {
    completions: ChatCompletionResource
  }

  constructor(config: PremBaseConfig) {
    this.config = Object.assign({ baseUrl: "https://app.prem.ninja" }, config)
    this.axios = axios.create()

    this.axios.defaults.baseURL = this.config.baseUrl
    this.axios.defaults.headers.common["Authorization"] = `Bearer ${this.config.apiKey}`

    this.embeddings = new EmbeddingResource(this)
    this.datapoints = new DataPointResource(this)
    this.chat = {
      completions: new ChatCompletionResource(this)
    }
  }
}
