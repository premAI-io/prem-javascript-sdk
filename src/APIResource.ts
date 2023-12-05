import Prem from "."

export default class APIResource {
    protected _client: Prem
  
    constructor(client: Prem) {
      this._client = client
    }
  }