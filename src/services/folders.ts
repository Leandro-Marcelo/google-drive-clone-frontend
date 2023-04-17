import {
  CreateFolderDBInput,
  File,
  Folder,
  GetFolderContents,
  UpdateFolderByIdParams,
  UploadedFile,
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

export const getFolderContentsAPI = ({ folderId }: GetFolderContents) =>
  axiosClient.get<
    Folder & {
      childFolders: Folder[]
      files: File[]
    }
  >(`/folders/${folderId}`, axiosClientConfig)

export const softDeleteManyFoldersAPI = (foldersIds: string[]) =>
  axiosClient.put<UploadedFile[]>(
    `/folders/softDeleteMany`,
    foldersIds,
    axiosClientConfig
  )
