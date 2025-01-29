import { APIModule } from "$components/index"

import v1_get_dataset_retrieve from "./operations/v1_get_dataset_retrieve"

export default class extends APIModule {
    retrieve = v1_get_dataset_retrieve(this.client)
}