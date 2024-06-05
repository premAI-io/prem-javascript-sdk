import { APIModule } from "$components/index"

import v1_repositories_create from "./operations/v1_repositories_create"

export default class extends APIModule {
    create = v1_repositories_create(this.client)
}