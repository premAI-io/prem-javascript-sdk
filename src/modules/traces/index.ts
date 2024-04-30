import { APIModule } from "$components/index"

import v1_traces_list from "./operations/v1_traces_list"
import v1_traces_retrieve from "./operations/v1_traces_retrieve"

export default class extends APIModule {
    list = v1_traces_list(this.client)
	retrieve = v1_traces_retrieve(this.client)
}