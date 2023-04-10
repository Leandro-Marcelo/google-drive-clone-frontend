import {
  CreateFolderDBInput,
  Folder,
  UpdateFolderByIdParams,
} from "../utils/typesAndInterfaces"
import { axiosClient, axiosClientConfig } from "./index"

export const getRootFoldersAPI = () =>
  axiosClient.get<Folder[]>(`/folders/root`, axiosClientConfig)

export const createFolderAPI = (params: CreateFolderDBInput) =>
  axiosClient.post<Folder>(`/folders/create`, params, axiosClientConfig)

export const updateFolderByIdAPI = (params: UpdateFolderByIdParams) =>
  axiosClient.put<Folder>(
    `/folders/${params.folderId}`,
    params.data,
    axiosClientConfig
  )
