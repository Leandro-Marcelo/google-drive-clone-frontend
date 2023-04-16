import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// const CURRENT_USER_RESET: CurrentUser | null = null

export interface StyleRtkState {
  IsDraggingFile: boolean
}
const STYLE_STATE_RESET: StyleRtkState = {
  IsDraggingFile: false,
}

const initialState = STYLE_STATE_RESET

export const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    setIsDraggingFileReducer: (state, action: PayloadAction<boolean>) => {
      const updatedStyleRTKState: StyleRtkState = {
        ...state,
        IsDraggingFile: action.payload,
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
