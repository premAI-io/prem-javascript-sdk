import { APIModule } from "$components/index"

import api_repositories_repository_document_create from "./operations/api_repositories_repository_document_create"

export default class extends APIModule {
    create = api_repositories_repository_document_create(this.client)
}