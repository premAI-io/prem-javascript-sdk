import Prem from "../index"

export class APIModule {
  protected client: Prem

  constructor(client: Prem) {
    this.client = client
  }
}
