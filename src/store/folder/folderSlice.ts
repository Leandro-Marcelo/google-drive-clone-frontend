import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  File,
  Folder,
  UpdateFileByIdParams,
  UpdateFolderByIdParams,
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
}

const initialState: FolderState = {
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
    setFolderToUpdate(
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

      return {
        ...state,
        files: updatedFiles,
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
  setFolderToUpdate,
  updateFolderByIdReducer,
  createFolderReducer,
  updateChildFoldersReducer,
  uploadManyFilesReducer,
} = foldersSlice.actions
// # This is for store
export default foldersSlice.reducer
