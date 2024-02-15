import { APIModule } from "$components/index"

import v1_data_points_list from "./operations/v1_data_points_list"
import v1_data_points_create from "./operations/v1_data_points_create"
import v1_data_points_retrieve from "./operations/v1_data_points_retrieve"
import v1_data_points_update from "./operations/v1_data_points_update"
import v1_data_points_partial_update from "./operations/v1_data_points_partial_update"
import v1_data_points_destroy from "./operations/v1_data_points_destroy"

export default class extends APIModule {
    list = v1_data_points_list(this.client)
	create = v1_data_points_create(this.client)
	retrieve = v1_data_points_retrieve(this.client)
	update = v1_data_points_update(this.client)
	patch = v1_data_points_partial_update(this.client)
	delete = v1_data_points_destroy(this.client)
}