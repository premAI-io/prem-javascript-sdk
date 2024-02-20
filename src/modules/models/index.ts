import { APIModule } from "$components/index"

import v1_models_list from "./operations/v1_models_list"
import v1_models_retrieve from "./operations/v1_models_retrieve"

export default class extends APIModule {
    list = v1_models_list(this.client)
	retrieve = v1_models_retrieve(this.client)
}