import APIResource from "./APIResource"

export type Confg = {
  baseUrl?: string,
  apiKey: string
}

export default class Prem {
  config: Confg & { baseUrl: string }
  chat: APIResource

  constructor(config: Confg) {
    this.config = Object.assign({ baseUrl: "https://app.prem.ninja" }, config)
    this.chat = new APIResource(this)
  }
}

