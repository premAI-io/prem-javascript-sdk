import { APIModule } from "$components/index"

import api_projects_generate_description_retrieve from "./operations/api_projects_generate_description_retrieve"

export default class extends APIModule {
    retrieve = api_projects_generate_description_retrieve(this.client)
}