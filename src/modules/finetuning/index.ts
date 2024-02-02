import { APIModule } from "$components/index"

import v1_finetuning_create from "./operations/v1_finetuning_create"
import v1_finetuning_retrieve from "./operations/v1_finetuning_retrieve"

export default class extends APIModule {
    create = v1_finetuning_create(this.client)
	retrieve = v1_finetuning_retrieve(this.client)
}