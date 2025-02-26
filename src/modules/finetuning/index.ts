import { APIModule } from "$components/index"

import v1_create_finetuning_job_create from "./operations/v1_create_finetuning_job_create"
import v1_delete_finetuning_job_create from "./operations/v1_delete_finetuning_job_create"
import v1_finetuned_model_try_create from "./operations/v1_finetuned_model_try_create"
import v1_finetuning_job_details_create from "./operations/v1_finetuning_job_details_create"
import v1_init_page_data_create from "./operations/v1_init_page_data_create"

export default class extends APIModule {
    create = v1_create_finetuning_job_create(this.client)
	create = v1_delete_finetuning_job_create(this.client)
	create = v1_finetuned_model_try_create(this.client)
	create = v1_finetuning_job_details_create(this.client)
	create = v1_init_page_data_create(this.client)
}