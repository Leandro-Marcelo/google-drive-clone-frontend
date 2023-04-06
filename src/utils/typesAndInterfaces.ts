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
