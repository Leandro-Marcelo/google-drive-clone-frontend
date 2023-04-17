import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// const CURRENT_USER_RESET: CurrentUser | null = null

export interface StyleRtkState {
  isDraggingFile: boolean
  menuOfNewIsOpen: boolean
}
const STYLE_STATE_RESET: StyleRtkState = {
  isDraggingFile: false,
  menuOfNewIsOpen: false,
}

const initialState = STYLE_STATE_RESET

export const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    setIsDraggingFileReducer: (state, action: PayloadAction<boolean>) => {
      const updatedStyleRTKState: StyleRtkState = {
        ...state,
        isDraggingFile: action.payload,
      }

      return updatedStyleRTKState
    },

    setMenuOfNewIsOpenReducer: (state, action: PayloadAction<boolean>) => {
      const updatedStyleRTKState: StyleRtkState = {
        ...state,
        menuOfNewIsOpen: action.payload,
      }

      return updatedStyleRTKState
    },
  },
})

export const {
  /* showCloudUploadingReducer,
  hideCloudUploadingReducer, */
  setIsDraggingFileReducer,
  setMenuOfNewIsOpenReducer,
} = stylesSlice.actions

export default stylesSlice.reducer
