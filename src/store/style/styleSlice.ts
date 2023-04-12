import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// const CURRENT_USER_RESET: CurrentUser | null = null

export interface StyleRtkState {
  showCloudUploading: boolean
}
const STYLE_STATE_RESET: StyleRtkState = {
  showCloudUploading: false,
}

const initialState = STYLE_STATE_RESET

export const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    showCloudUploadingReducer: (state, action: PayloadAction<void>) => {
      return {
        ...state,
        showCloudUploading: true,
      }
    },
    hideCloudUploadingReducer: (state, action: PayloadAction<void>) => {
      return {
        ...state,
        showCloudUploading: false,
      }
    },
  },
})

export const { showCloudUploadingReducer, hideCloudUploadingReducer } =
  stylesSlice.actions

export default stylesSlice.reducer
