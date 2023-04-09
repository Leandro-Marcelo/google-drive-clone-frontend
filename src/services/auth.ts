import { AuthValidateResponse } from "../utils/typesAndInterfaces"
import { axiosClient, axiosClientConfig } from "./index"

export const authValidateAPI = () =>
  axiosClient.get<AuthValidateResponse>(`/auth/validate`, axiosClientConfig)

export const authLogoutAPI = () =>
  axiosClient.get<void>(`/auth/logout`, axiosClientConfig)
