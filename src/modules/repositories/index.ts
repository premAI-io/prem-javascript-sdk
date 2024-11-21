import { APIModule } from "$components/index"

import api_repositories_repositories_create from "./operations/api_repositories_repositories_create"

export default class extends APIModule {
    create = api_repositories_repositories_create(this.client)
}