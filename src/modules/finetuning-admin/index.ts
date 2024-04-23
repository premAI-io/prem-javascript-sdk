import { APIModule } from "$components/index"

import projects_gym_admin_datasets_list from "./operations/projects_gym_admin_datasets_list"
import projects_gym_admin_datasets_create from "./operations/projects_gym_admin_datasets_create"
import projects_gym_admin_datasets_retrieve from "./operations/projects_gym_admin_datasets_retrieve"
import projects_gym_admin_finetunedmodels_list from "./operations/projects_gym_admin_finetunedmodels_list"
import projects_gym_admin_finetunedmodels_retrieve from "./operations/projects_gym_admin_finetunedmodels_retrieve"
import projects_gym_admin_finetunedmodels_promote_create from "./operations/projects_gym_admin_finetunedmodels_promote_create"
import projects_gym_admin_finetuningjobs_list from "./operations/projects_gym_admin_finetuningjobs_list"
import projects_gym_admin_finetuningjobs_create from "./operations/projects_gym_admin_finetuningjobs_create"
import projects_gym_admin_finetuningjobs_retrieve from "./operations/projects_gym_admin_finetuningjobs_retrieve"
import projects_gym_admin_finetuningmessages_list from "./operations/projects_gym_admin_finetuningmessages_list"
import projects_gym_admin_finetuningmessages_create from "./operations/projects_gym_admin_finetuningmessages_create"
import projects_gym_admin_finetuningrequests_list from "./operations/projects_gym_admin_finetuningrequests_list"
import projects_gym_admin_finetuningrequests_retrieve from "./operations/projects_gym_admin_finetuningrequests_retrieve"
import projects_gym_admin_finetuningrequests_set_started_create from "./operations/projects_gym_admin_finetuningrequests_set_started_create"

export default class extends APIModule {
    list = projects_gym_admin_datasets_list(this.client)
	create = projects_gym_admin_datasets_create(this.client)
	retrieve = projects_gym_admin_datasets_retrieve(this.client)
	list = projects_gym_admin_finetunedmodels_list(this.client)
	retrieve = projects_gym_admin_finetunedmodels_retrieve(this.client)
	create = projects_gym_admin_finetunedmodels_promote_create(this.client)
	list = projects_gym_admin_finetuningjobs_list(this.client)
	create = projects_gym_admin_finetuningjobs_create(this.client)
	retrieve = projects_gym_admin_finetuningjobs_retrieve(this.client)
	list = projects_gym_admin_finetuningmessages_list(this.client)
	create = projects_gym_admin_finetuningmessages_create(this.client)
	list = projects_gym_admin_finetuningrequests_list(this.client)
	retrieve = projects_gym_admin_finetuningrequests_retrieve(this.client)
	create = projects_gym_admin_finetuningrequests_set_started_create(this.client)
}