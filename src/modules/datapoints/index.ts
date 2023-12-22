import { APIModule } from "$components/index"
import type {
  CreateDataPointRequest,
  CreateDataPointResponse,
  RetrieveDataPointResponse,
  UpdateDataPointRequest,
  UpdateDataPointResponse
} from "$types/index"
import { AxiosRequestConfig } from "axios"

export default class DataPointResource extends APIModule {
  create = (args: CreateDataPointRequest, options?: AxiosRequestConfig): Promise<CreateDataPointResponse> => {
    return this.client.call({
      method: "POST",
      data: {
        trace: null,
        ...args
      },
      url: "/api/projects/data-points/",
      ...options
    })
  }

  retrieve = (id: number, options?: AxiosRequestConfig): Promise<RetrieveDataPointResponse> => {
    return this.client.call({
      method: "GET",
      url: `/api/projects/data-points/${id}/`,
      ...options
    })
  }

  list = (options?: AxiosRequestConfig): Promise<RetrieveDataPointResponse[]> => {
    return this.client.call({
      method: "GET",
      url: "/api/projects/data-points/",
      ...options
    })
  }

  update = (id: number, updates: UpdateDataPointRequest, options?: AxiosRequestConfig): Promise<UpdateDataPointResponse> => {
    return this.client.call({
      method: "PATCH",
      data: updates,
      url: `/api/projects/data-points/${id}/`,
      ...options
    })
  }

  delete = (id: number, options?: AxiosRequestConfig): Promise<void> => {
    return this.client.call({
      method: "DELETE",
      url: `/api/projects/data-points/${id}/`,
      ...options
    })
  }
}
