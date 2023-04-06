import authReducer from "./auth/authSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
