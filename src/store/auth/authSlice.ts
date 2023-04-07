import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CurrentUser } from "../../utils/typesAndInterfaces"

const CURRENT_USER_RESET: CurrentUser = {
  id: "",
  active: false,
  name: "",
  email: "",
  profilePicture: null,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const AUTH_STATE_RESET = {
  currentUser: CURRENT_USER_RESET,
  logged: false,
}

const initialState = AUTH_STATE_RESET

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSignUpGoogleReducer: (state, action: PayloadAction<CurrentUser>) => {
      return {
        ...state,
        currentUser: action.payload,
      }
    },
  },
})

export const { loginSignUpGoogleReducer } = authSlice.actions

export default authSlice.reducer
