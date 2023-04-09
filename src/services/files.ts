import { File } from "../utils/typesAndInterfaces"
import { axiosClient, axiosClientConfig } from "./index"

export const getRootFilesAPI = () =>
  axiosClient.get<File[]>(`/files/root`, axiosClientConfig)
