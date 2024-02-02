import { APIModule } from "$components/index"

import api_projects_traces_create from "./operations/api_projects_traces_create"

export default class extends APIModule {
    create = api_projects_traces_create(this.client)
}