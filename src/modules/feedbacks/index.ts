import { APIModule } from "$components/index"

import v1_set_trace_feedback_create from "./operations/v1_set_trace_feedback_create"

export default class extends APIModule {
    create = v1_set_trace_feedback_create(this.client)
}