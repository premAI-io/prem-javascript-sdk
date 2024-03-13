import { APIModule } from "$components/index"

import v1_repository_document_create from "./operations/v1_repository_document_create"

export default class extends APIModule {
    create = v1_repository_document_create(this.client)
}