import { APIModule } from "$components/index"

import auth_token_create from "./operations/auth_token_create"

export default class extends APIModule {
    create = auth_token_create(this.client)
}