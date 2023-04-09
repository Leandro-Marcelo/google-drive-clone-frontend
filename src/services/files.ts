import { File, UpdateFileByIdParams } from "../utils/typesAndInterfaces"
import { axiosClient, axiosClientConfig } from "./index"

export const getRootFilesAPI = () =>
  axiosClient.get<File[]>(`/files/root`, axiosClientConfig)

export const updateFileByIdAPI = ({ fileId, data }: UpdateFileByIdParams) =>
  axiosClient.put<File>(`/files/${fileId}`, data, axiosClientConfig)
