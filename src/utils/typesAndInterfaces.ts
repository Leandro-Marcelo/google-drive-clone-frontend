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
}

// OTHERS

export type CurrentUser = Omit<User, "password">

export type PublicUser = Omit<User, "password">

// AUTH

export interface AuthValidateResponse {
  currentUser: CurrentUser
  authJwt: string
}

// FILE
export type UpdateFileDBInput = Pick<File, "originalName" | "folderId">

export interface UpdateFileByIdParams {
  fileId: string
  data: UpdateFileDBInput
}

// FOLDER

export type CreateFolderDBInput = Pick<
  Folder,
  "originalName" | "parentFolderId"
>

export type UpdateFolderDBInput = Pick<
  Folder,
  "originalName" | "parentFolderId"
>

export interface UpdateFolderByIdParams {
  folderId: string
  data: UpdateFolderDBInput
}

export interface GetFolderContents {
  folderId: string
}
