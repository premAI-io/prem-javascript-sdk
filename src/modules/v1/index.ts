import { APIModule } from "$components/index"

import v1_ping_retrieve from "./operations/v1_ping_retrieve"

export default class extends APIModule {
    retrieve = v1_ping_retrieve(this.client)
}