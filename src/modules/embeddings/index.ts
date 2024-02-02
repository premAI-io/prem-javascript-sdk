import { APIModule } from "$components/index"

import v1_embeddings_create from "./operations/v1_embeddings_create"

export default class extends APIModule {
    create = v1_embeddings_create(this.client)
}