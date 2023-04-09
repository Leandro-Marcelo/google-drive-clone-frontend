import { Folder } from "../utils/typesAndInterfaces"
import { axiosClient, axiosClientConfig } from "./index"

export const getRootFoldersAPI = () =>
  axiosClient.get<Folder[]>(`/folders/root`, axiosClientConfig)
