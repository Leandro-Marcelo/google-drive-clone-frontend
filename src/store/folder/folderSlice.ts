import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { File, Folder } from "../../utils/typesAndInterfaces"

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
  folderToUpdate: {
    id: string
    originalName: string
  } | null
  fileToUpdate: {
    fileId: string
    originalName: string
  } | null
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
    // * FOLDER STATE
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

    setFileToUpdateReducer(
      state,
      action: PayloadAction<{ fileId: string; originalName: string } | null>
    ) {
      return {
        ...state,
        fileToUpdate: action.payload,
      }
    },
    updateFileByIdReducer(
      state,
      action: PayloadAction<{ fileId: string; originalName: string }>
    ) {
      return {
        ...state,
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
} = foldersSlice.actions
// # This is for store
export default foldersSlice.reducer
