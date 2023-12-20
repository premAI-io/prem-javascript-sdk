import { APIResource, APIRoute } from "$components/index"
import type { CreateEmbeddingRequest, CreateEmbeddingResponse } from "$types/index"

export class CreateEmbeddingRoute extends APIRoute<CreateEmbeddingRequest, CreateEmbeddingResponse> {
  method = "POST"
  endpoint = "/v1/chat/embeddings"
}

export default class EmbeddingResource extends APIResource {
  create = new CreateEmbeddingRoute(this._client).call
}
