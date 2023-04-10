import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  File,
  Folder,
  UpdateFileByIdParams,
  UpdateFolderByIdParams,
  UpdateFolderDBInput,
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
} = foldersSlice.actions
// # This is for store
export default foldersSlice.reducer
