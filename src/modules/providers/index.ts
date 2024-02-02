import { APIModule } from "$components/index"

import api_providers_retrieve from "./operations/api_providers_retrieve"
import api_providers_leaderboard_retrieve from "./operations/api_providers_leaderboard_retrieve"

export default class extends APIModule {
    retrieve_providers = api_providers_retrieve(this.client)
	retrieve_leaderboard = api_providers_leaderboard_retrieve(this.client)
}