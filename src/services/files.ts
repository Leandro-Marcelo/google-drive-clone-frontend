import {
  File,
  UpdateFileByIdParams,
  UploadFilesParams,
  UploadManyFilesParams,
  UploadedFile,
} from "../utils/typesAndInterfaces"
import { axiosClient, axiosClientConfig } from "./index"

export const getRootFilesAPI = () =>
  axiosClient.get<File[]>(`/files/root`, axiosClientConfig)

export const updateFileByIdAPI = ({ fileId, data }: UpdateFileByIdParams) =>
  axiosClient.put<File>(`/files/${fileId}`, data, axiosClientConfig)

export const uploadFilesAPI = ({ files, folderId }: UploadFilesParams) =>
  axiosClient.post<UploadedFile[]>(
    `/files/upload/${folderId}`,
    files,
    axiosClientConfig
  )

/* export const uploadManyFilesAPI = ({ formData }: UploadManyFilesParams) =>
  axiosClient.post<UploadedFile[]>(
    `/files/uploadMany`,
    formData,
    axiosClientConfig
  ) */

export const softDeleteManyFilesAPI = (filesIds: string[]) =>
  axiosClient.put<UploadedFile[]>(
    `/files/softDeleteMany`,
    filesIds,
    axiosClientConfig
  )
