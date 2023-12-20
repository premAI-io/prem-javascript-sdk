import { AxiosRequestConfig } from "axios"
import Prem from "src"

export class APIModule {
  protected client: Prem

  constructor(client: Prem) {
    this.client = client
  }
}
