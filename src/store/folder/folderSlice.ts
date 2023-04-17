import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  File,
  Folder,
  IsShowCtxMenuType,
  OnlyFileOrFolder,
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
  softDeletedFiles: File[]
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

  /* CHECKBOX */
  totalFilesPlusFolders: number

  /* ANOTHER */
  checkedFilesAndFoldersIds: Map<string, OnlyFileOrFolder>
}

const initialState: FolderState = {
  // ! ESTO DEL REDUX STATE NO SE ESTA USANDO
  // * REDUX STATE
  loading: false,
  message: "",
  status: "",
  // * FOLDER STATE
  files: [],
  softDeletedFiles: [],
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

  totalFilesPlusFolders: 0,

  // * ANOTHER
  checkedFilesAndFoldersIds: new Map<string, OnlyFileOrFolder>(),
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
        totalFilesPlusFolders:
          action.payload.files.length + action.payload.folders.length,
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
      const updatedFolderRTKState: FolderState = {
        ...state,
        folders: [...state.folders, action.payload],
        totalFilesPlusFolders: state.totalFilesPlusFolders + 1,
      }

      return updatedFolderRTKState
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
        totalFilesPlusFolders: updatedFiles.length + state.folders.length,
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

    resetIsShowCtxMenuReducer(state) {
      const resetCtxMenu = {
        file: false,
        folder: false,
        outside: false,
      }

      const updatedFolderRTKState: FolderState = {
        ...state,
        isShowCtxMenu: {
          ...resetCtxMenu,
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

    handleCheckFileOrFolderIdReducer(
      state,
      action: PayloadAction<{
        id: string
        type: "file" | "folder"
      }>
    ) {
      // copy state.checkedFilesAndFoldersIds
      const updatedCheckedFilesAndFoldersIds = new Map(
        state.checkedFilesAndFoldersIds
      )

      if (updatedCheckedFilesAndFoldersIds.has(action.payload.id)) {
        updatedCheckedFilesAndFoldersIds.delete(action.payload.id)
      } else {
        updatedCheckedFilesAndFoldersIds.set(
          action.payload.id,
          action.payload.type
        )
      }

      const updatedFolderRTKState: FolderState = {
        ...state,
        checkedFilesAndFoldersIds: updatedCheckedFilesAndFoldersIds,
      }

      return updatedFolderRTKState
    },

    checkSpecificFileOrFolderIdReducer(
      state,
      action: PayloadAction<{
        id: string
        type: OnlyFileOrFolder
      }>
    ) {
      const updatedCheckedFilesAndFoldersIds = new Map<
        string,
        OnlyFileOrFolder
      >()

      updatedCheckedFilesAndFoldersIds.set(
        action.payload.id,
        action.payload.type
      )

      const updatedFolderRTKState: FolderState = {
        ...state,
        checkedFilesAndFoldersIds: updatedCheckedFilesAndFoldersIds,
      }

      return updatedFolderRTKState
    },

    checkAllFilesAndFoldersIdsReducer(state, action: PayloadAction<void>) {
      if (
        !(state.checkedFilesAndFoldersIds.size === state.totalFilesPlusFolders)
      ) {
        const files: [string, OnlyFileOrFolder][] = state.files.map((file) => [
          file.id,
          "file",
        ])

        const folders: [string, OnlyFileOrFolder][] = state.folders.map(
          (folder) => [folder.id, "folder"]
        )

        const updatedCheckedFilesAndFoldersIds = new Map<
          string,
          OnlyFileOrFolder
        >([...files, ...folders])

        const updatedFolderRTKState: FolderState = {
          ...state,
          checkedFilesAndFoldersIds: updatedCheckedFilesAndFoldersIds,
        }

        return updatedFolderRTKState
      } else {
        const updatedFolderRTKState: FolderState = {
          ...state,
          checkedFilesAndFoldersIds: new Map<string, OnlyFileOrFolder>(),
        }

        return updatedFolderRTKState
      }
    },

    resetCheckedFilesAndFoldersIdsReducer(state) {
      const updatedFolderRTKState: FolderState = {
        ...state,
        checkedFilesAndFoldersIds: new Map<string, OnlyFileOrFolder>(),
      }

      return updatedFolderRTKState
    },

    updateFilesAndFoldersToSoftDeletedFilesReducer(
      state,
      action: PayloadAction<{
        files: UploadedFile[]
        folders: UploadedFile[]
      }>
    ) {
      const uploadedFiles: UploadedFile[] = action.payload.files
      const fullfilledFiles: File[] = []
      const rejectedFiles: string[] = []

      const uploadedFolders: UploadedFile[] = action.payload.files
      const fullfilledFolders: File[] = []
      const rejectedFolders: string[] = []

      uploadedFiles.forEach((file) => {
        if (file.status === "rejected") {
          rejectedFiles.push(file.reason.message)
        } else {
          fullfilledFiles.push(file.value)
        }
      })

      uploadedFolders.forEach((folder) => {
        if (folder.status === "rejected") {
          rejectedFolders.push(folder.reason.message)
        } else {
          fullfilledFolders.push(folder.value)
        }
      })

      const fulfilledFilesIds = fullfilledFiles.map((file) => file.id)
      const fulfilledFoldersIds = fullfilledFolders.map((folder) => folder.id)

      const updatedFiles = state.files.filter((file) => {
        if (fulfilledFilesIds.includes(file.id)) {
          return false
        } else {
          return true
        }
      })

      const updatedFolders = state.folders.filter((folder) => {
        if (fulfilledFoldersIds.includes(folder.id)) {
          return false
        } else {
          return true
        }
      })

      const updatedTotalFilesPlusFolders =
        updatedFiles.length + updatedFolders.length

      const updatedFolderRTKState: FolderState = {
        ...state,
        files: updatedFiles,
        softDeletedFiles: fullfilledFiles,
        totalFilesPlusFolders: updatedTotalFilesPlusFolders,
        checkedFilesAndFoldersIds: new Map<string, OnlyFileOrFolder>(),
      }

      return updatedFolderRTKState
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
  resetIsShowCtxMenuReducer,

  // * SOFT DELETE FILES
  updateFilesAndFoldersToSoftDeletedFilesReducer,

  /* checjed */
  handleCheckFileOrFolderIdReducer,
  checkSpecificFileOrFolderIdReducer,
  checkAllFilesAndFoldersIdsReducer,
  resetCheckedFilesAndFoldersIdsReducer,
} = foldersSlice.actions
// # This is for store
export default foldersSlice.reducer
