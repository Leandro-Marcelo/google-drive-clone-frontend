import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// const CURRENT_USER_RESET: CurrentUser | null = null

export interface StyleRtkState {
  isDraggingFile: boolean
}
const STYLE_STATE_RESET: StyleRtkState = {
  isDraggingFile: false,
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
  },
})

export const {
  /* showCloudUploadingReducer,
  hideCloudUploadingReducer, */
  setIsDraggingFileReducer,
} = stylesSlice.actions

export default stylesSlice.reducer
