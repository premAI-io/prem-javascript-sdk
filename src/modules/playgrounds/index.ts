import { APIModule } from "$components/index"

import api_playgrounds_image_retrieve from "./operations/api_playgrounds_image_retrieve"
import api_playgrounds_ot_info_retrieve from "./operations/api_playgrounds_ot_info_retrieve"

export default class extends APIModule {
    retrieve_image = api_playgrounds_image_retrieve(this.client)
	retrieve_ot_info = api_playgrounds_ot_info_retrieve(this.client)
}