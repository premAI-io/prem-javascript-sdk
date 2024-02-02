import { APIModule } from "$components/index"

import api_projects_data_points_list from "./operations/api_projects_data_points_list"
import api_projects_data_points_create from "./operations/api_projects_data_points_create"
import api_projects_data_points_retrieve from "./operations/api_projects_data_points_retrieve"
import api_projects_data_points_update from "./operations/api_projects_data_points_update"
import api_projects_data_points_partial_update from "./operations/api_projects_data_points_partial_update"
import api_projects_data_points_destroy from "./operations/api_projects_data_points_destroy"

export default class extends APIModule {
    list = api_projects_data_points_list(this.client)
	create = api_projects_data_points_create(this.client)
	retrieve = api_projects_data_points_retrieve(this.client)
	update = api_projects_data_points_update(this.client)
	patch = api_projects_data_points_partial_update(this.client)
	delete = api_projects_data_points_destroy(this.client)
}