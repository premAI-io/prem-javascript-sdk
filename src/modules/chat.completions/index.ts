import { APIModule } from "$components/index"

import v1_chat_completions_create from "./operations/v1_chat_completions_create"

export default class extends APIModule {
    create = v1_chat_completions_create(this.client)
}