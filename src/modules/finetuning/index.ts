import { APIModule } from "$components/index"

import v1_create_finetuning_job_create from "./operations/v1_create_finetuning_job_create"
import v1_delete_finetuning_job_create from "./operations/v1_delete_finetuning_job_create"
import v1_download_finetuned_model_create from "./operations/v1_download_finetuned_model_create"

export default class extends APIModule {
    create = v1_create_finetuning_job_create(this.client)
	create = v1_delete_finetuning_job_create(this.client)
	create = v1_download_finetuned_model_create(this.client)
}