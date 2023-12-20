import { FunctionCall } from "$types/index"
import { AxiosRequestConfig } from "axios"
import Prem from "src"

export class APIResource {
  protected _client: Prem

  constructor(client: Prem) {
    this._client = client
  }
}

export abstract class APIRoute<T = any, U = any> {
  abstract endpoint: string | ((args: T) => string)
  abstract method: string
  requestBody?: (args: T) => any = (args: T) => args

  protected _client: Prem
  call: FunctionCall<T, U>  = async (args: T, config?: AxiosRequestConfig) => {
    const uri = typeof this.endpoint === "function" ? this.endpoint(args) : this.endpoint
    const { data } = await this._client.axios.request<U>({
      url: uri,
      method: this.method,
      data: this.requestBody ? this.requestBody(args) : args,
      ...config
    })

    return data
  }

  constructor(client: Prem) {
    this._client = client
  }
}
