import Prem from "."
import APIResource from "./APIResource"

export class Completions extends APIResource {
  constructor(client: Prem) {
    super(client)
  }
}
