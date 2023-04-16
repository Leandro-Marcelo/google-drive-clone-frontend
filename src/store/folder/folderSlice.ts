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

import { enableMapSet } from "immer"

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

  checkedIds: Set<string>
  totalFilesPlusFolders: number
  topCheckboxState: boolean
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

  // * CHECKBOX 

  checkedIds: new Set<string>(),
  totalFilesPlusFolders: 0,
  topCheckboxState: false,
  
}

/*  const topCheckbox: any = useRef<any>()
  const [checkedIds, setCheckedIds] = useState(new Set<string>())
  let openIssues = issues.filter(({ status }) => status === "open")
  let numOpenIssues = openIssues.length
  // por que aca le cambie el nombre a checkedIssues
  let numCheckedIds = checkedIds.size

  const handleOnChange = (id: string) => {
    const updatedCheckedIds = new Set(checkedIds)
    if (updatedCheckedIds.has(id)) {
      updatedCheckedIds.delete(id)
    } else {
      updatedCheckedIds.add(id)
    }

    let updatedNumCheckedIds = updatedCheckedIds.size
    topCheckbox.current.indeterminate =
      0 < updatedNumCheckedIds && updatedNumCheckedIds < numOpenIssues
    setCheckedIds(updatedCheckedIds)
  }

  const handleSelectDeselectAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedIds(new Set(openIssues.map((oI) => oI.id)))
    } else {
      setCheckedIds(new Set())
    }
  } */

  enableMapSet()

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

      const updatedFolderRTKState: FolderState = {
        ...state,
        files: action.payload.files,
        folders: action.payload.folders,
        totalFilesPlusFolders: action.payload.files.length + action.payload.folders.length
      }

      return updatedFolderRTKState
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

    /* CHECK BOX */
    handleCheckIdReducer(state, action: PayloadAction<string>) {
      const updatedCheckedIds = new Set(state.checkedIds)
      if (updatedCheckedIds.has(action.payload)) {
        updatedCheckedIds.delete(action.payload)
      } else {
        updatedCheckedIds.add(action.payload)
      }

      let updatedNumCheckedIds = updatedCheckedIds.size
      console.log("updatedNumCheckedIds")
      console.log(updatedNumCheckedIds)
      console.log("state.totalFilesPlusFolders")
      console.log(state.totalFilesPlusFolders)
      // const updatedTopCheckboxState = 0 < updatedNumCheckedIds && updatedNumCheckedIds < state.totalFilesPlusFolders
        
      const updatedFolderRTKState: FolderState = {
        ...state,
        checkedIds: updatedCheckedIds,
      }

      return updatedFolderRTKState
    },

    handleCheckAllIdsReducer(state, action: PayloadAction<boolean>) {
       if (action.payload) {
        const filesIds = state.files.map((file) => file.id)
        const foldersIds = state.folders.map((folder) => folder.id)

        const updatedFolderRTKState: FolderState = {
          ...state,
          checkedIds: new Set([...filesIds, ...foldersIds]),
        }
      return updatedFolderRTKState
    } else {

      const updatedFolderRTKState: FolderState = {
        ...state,
        checkedIds: new Set<string>(),
      }

      return updatedFolderRTKState
    }
    }
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
  handleCheckIdReducer,
  handleCheckAllIdsReducer
} = foldersSlice.actions
// # This is for store
export default foldersSlice.reducer
