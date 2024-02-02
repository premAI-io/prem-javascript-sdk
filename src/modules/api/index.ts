import { APIModule } from "$components/index"

import api_schema_retrieve from "./operations/api_schema_retrieve"

export default class extends APIModule {
    retrieve = api_schema_retrieve(this.client)
}