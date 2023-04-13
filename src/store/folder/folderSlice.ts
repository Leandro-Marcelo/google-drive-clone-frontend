import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  File,
  Folder,
  IsShowCtxMenuType,
  UpdateFileByIdParams,
  UpdateFolderByIdParams,
  UpdateIsShowCtxMenuReducer,
  UploadedFile,
} from "../../utils/typesAndInterfaces"

export interface ReduxState {
  status: string
  message: string
  loading: boolean
}

export interface ChildFolder {
  id: string
  originalName: string
}

export interface FolderState extends ReduxState {
  files: File[]
  folders: Folder[]
  childFolders: ChildFolder[]
  folderToUpdate: UpdateFolderByIdParams | null
  fileToUpdate: UpdateFileByIdParams | null

  // * CTX MENU

  positionCtxMenu: {
    x: number
    y: number
  }

  isShowCtxMenu: {
    file: boolean
    folder: boolean
    outside: boolean
  }
}

const initialState: FolderState = {
  // ! ESTO DEL REDUX STATE NO SE ESTA USANDO
  // * REDUX STATE
  loading: false,
  message: "",
  status: "",
  // * FOLDER STATE
  files: [],
  folders: [],
  childFolders: [],
  folderToUpdate: null,
  fileToUpdate: null,

  // * CTX MENU

  positionCtxMenu: {
    x: 0,
    y: 0,
  },

  isShowCtxMenu: {
    file: false,
    folder: false,
    outside: false,
  },
}

export const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    getRootFilesAndFoldersReducer(
      state,
      action: PayloadAction<{
        files: File[]
        folders: Folder[]
      }>
    ) {
      return {
        ...state,
        files: action.payload.files,
        folders: action.payload.folders,
      }
    },
    setFolderToUpdateReducer(
      state,
      action: PayloadAction<UpdateFolderByIdParams | null>
    ) {
      return {
        ...state,
        folderToUpdate: action.payload,
      }
    },
    setFileToUpdateReducer(
      state,
      action: PayloadAction<UpdateFileByIdParams | null>
    ) {
      if (!action.payload) return { ...state, fileToUpdate: null }

      return {
        ...state,
        fileToUpdate: action.payload,
      }
    },
    updateFileByIdReducer(state, action: PayloadAction<File>) {
      const updatedFiles = state.files.map((file) => {
        if (file.id === action.payload.id) return action.payload
        return file
      })

      return {
        ...state,
        files: updatedFiles,
      }
    },

    updateFolderByIdReducer(state, action: PayloadAction<Folder>) {
      const updatedFolders = state.folders.map((folder) => {
        if (folder.id === action.payload.id) return action.payload
        return folder
      })

      return {
        ...state,
        folders: updatedFolders,
      }
    },

    createFolderReducer(state, action: PayloadAction<Folder>) {
      return {
        ...state,
        folders: [...state.folders, action.payload],
      }
    },

    updateChildFoldersReducer(state, action: PayloadAction<ChildFolder>) {
      const { id } = action.payload // Obtener el id del folder seleccionado

      if (id === "ROOT") {
        // Si el id es ROOT, resetear el array de childFolders
        state.childFolders = []
        return
      }

      const existingChildFolderIndex = state.childFolders.findIndex(
        (childFolder) => childFolder.id === id
      ) // Encontrar el índice del childFolder existente en state.childFolders

      if (existingChildFolderIndex !== -1) {
        // Si el childFolder ya existe en state.childFolders
        // Truncar el array de childFolders para mantener solo los elementos hasta el childFolder existente (incluyéndolo)
        state.childFolders = state.childFolders.slice(
          0,
          existingChildFolderIndex + 1
        )
      } else {
        // Agregar el childFolder al final del array de childFolders
        state.childFolders = [...state.childFolders, action.payload]
      }
    },

    uploadManyFilesReducer(state, action: PayloadAction<UploadedFile[]>) {
      const uploadedFiles: UploadedFile[] = action.payload
      const fullfilledFiles: File[] = []
      const rejectedFiles: string[] = []

      uploadedFiles.forEach((file) => {
        if (file.status === "rejected") {
          rejectedFiles.push(file.reason.message)
        } else {
          fullfilledFiles.push(file.value)
        }
      })
      const updatedFiles = [...state.files, ...fullfilledFiles]

      const updatedFolderRTKState: FolderState = {
        ...state,
        files: updatedFiles,
      }

      return updatedFolderRTKState
    },

    updateIsShowCtxMenuReducer(
      state,
      action: PayloadAction<UpdateIsShowCtxMenuReducer>
    ) {
      const { type, isShow } = action.payload

      const resetCtxMenu = {
        file: false,
        folder: false,
        outside: false,
      }

      const updatedFolderRTKState: FolderState = {
        ...state,
        isShowCtxMenu: {
          ...resetCtxMenu,
          [type]: isShow,
        },
      }

      return updatedFolderRTKState
    },

    updatePositionCtxMenuReducer(
      state,
      action: PayloadAction<{ x: number; y: number }>
    ) {
      const { x, y } = action.payload

      return {
        ...state,
        positionCtxMenu: {
          x,
          y,
        },
      }
    },
  },

  extraReducers: (builder) => {},
})

// # Export functions that setState
export const {
  getRootFilesAndFoldersReducer,
  setFileToUpdateReducer,
  updateFileByIdReducer,
  setFolderToUpdateReducer,
  updateFolderByIdReducer,
  createFolderReducer,
  updateChildFoldersReducer,
  uploadManyFilesReducer,
  updateIsShowCtxMenuReducer,
  updatePositionCtxMenuReducer,
} = foldersSlice.actions
// # This is for store
export default foldersSlice.reducer
