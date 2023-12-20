import { APIResource, APIRoute } from "$components/index"
import type { CreateDataPointRequest, CreateDataPointResponse, DeleteDataPointRequest, DeleteDataPointResponse, RetrieveDataPointRequest, RetrieveDataPointResponse, UpdateDataPointRequest, UpdateDataPointResponse } from "$types/index"

export class CreateDataPointRoute extends APIRoute<CreateDataPointRequest, CreateDataPointResponse> {
  method = "POST"
  endpoint = "/api/projects/data-points"
}

export class RetrieveDataPointRoute extends APIRoute<RetrieveDataPointRequest, RetrieveDataPointResponse> {
  method = "GET"
  endpoint = (args: RetrieveDataPointRequest) => `/api/projects/data-points/${args.id}`
  requestBody = (args: RetrieveDataPointRequest) => undefined
}

export class ListDataPointRoute extends APIRoute<CreateDataPointRequest, CreateDataPointResponse> {
  method = "GET"
  endpoint = "/api/projects/data-points"
}

export class UpdateDataPointRoute extends APIRoute<UpdateDataPointRequest, UpdateDataPointResponse> {
  method = "POST"
  endpoint = (args: RetrieveDataPointRequest) => `/api/projects/data-points/${args.id}`
  requestBody = ({ id, ...updates }: DeleteDataPointRequest) => updates
}

export class DeleteDataPointRoute extends APIRoute<DeleteDataPointRequest, DeleteDataPointResponse> {
  method = "PATCH"
  endpoint = (args: RetrieveDataPointRequest) => `/api/projects/data-points/${args.id}`
  requestBody = (args: DeleteDataPointRequest) => undefined
}

export default class DataPointResource extends APIResource {
  create = new CreateDataPointRoute(this._client).call
  retrieve = new RetrieveDataPointRoute(this._client).call
  list = new ListDataPointRoute(this._client).call
  update = new UpdateDataPointRoute(this._client).call
  delete = new DeleteDataPointRoute(this._client).call
}
