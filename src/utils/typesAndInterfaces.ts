// DOMAIN
export interface User {
  id: string
  active: boolean
  name: string
  email: string
  password: string
  profilePicture: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Folder {
  id: string
  createdAt: Date
  originalName: string
  userId: string
  updatedAt: Date
  parentFolderId: string | null
  softDeleted: boolean
}

export interface File {
  id: string
  createdAt: Date
  fileName: string
  folderId: string | null
  originalName: string
  userId: string
  updatedAt: Date
  imgSrc: string
  softDeleted: boolean
}

// OTHERS

export type OnlyFileOrFolder = "file" | "folder"

export type CurrentUser = Omit<User, "password">

export type PublicUser = Omit<User, "password">

// AUTH

export interface AuthValidateResponse {
  currentUser: CurrentUser
  authJwt: string
}

// FILE
export type UpdateFileDBInput = Pick<
  File,
  "originalName" | "folderId" | "softDeleted"
>

export interface UpdateFileByIdParams {
  fileId: string
  data: UpdateFileDBInput
}

export interface UploadManyFilesParams {
  formData: FormData
}

export interface UploadFilesParams {
  folderId: string | null
  files: FormData
}

export type UploadedFile =
  | {
      status: "fulfilled"
      value: File
    }
  | {
      status: "rejected"
      reason: {
        id: string
        originalName: string
        message: string
      }
    }

export type UploadedFolder =
  | {
      status: "fulfilled"
      value: Folder
    }
  | {
      status: "rejected"
      reason: {
        id: string
        originalName: string
        message: string
      }
    }

// FOLDER

export type CreateFolderDBInput = Pick<
  Folder,
  "originalName" | "parentFolderId"
>

export type UpdateFolderDBInput = Pick<
  Folder,
  "originalName" | "parentFolderId" | "softDeleted"
>

export interface UpdateFolderByIdParams {
  folderId: string
  data: UpdateFolderDBInput
}

export interface GetFolderContents {
  folderId: string
}

// * TYPES CTX MENU

export type IsShowCtxMenuType = "file" | "folder" | "outside"

export interface UpdateIsShowCtxMenuReducer {
  type: IsShowCtxMenuType
  isShow: boolean
}
