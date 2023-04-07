import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  AuthValidateResponse,
  CurrentUser,
} from "../../utils/typesAndInterfaces"

const CURRENT_USER_RESET: CurrentUser | null = null

export interface AuthRtkState {
  currentUser: CurrentUser | null
}
const AUTH_STATE_RESET: AuthRtkState = {
  currentUser: CURRENT_USER_RESET,
}

const initialState = AUTH_STATE_RESET

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSignUpGoogleReducer: (
      state,
      action: PayloadAction<AuthValidateResponse>
    ) => {
      return {
        ...state,
        currentUser: action.payload.currentUser,
      }
    },
    logoutReducer: (state, action: PayloadAction<void>) => {
      return {
        ...state,
        currentUser: CURRENT_USER_RESET,
      }
    },
  },
})

export const { loginSignUpGoogleReducer, logoutReducer } = authSlice.actions

export default authSlice.reducer
