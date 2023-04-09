import axios, { AxiosRequestConfig } from "axios"
import { REST_API } from "../configs"
import { AuthValidateResponse, File, Folder } from "../utils/typesAndInterfaces"
import { errorToast } from "../utils/toasts"

export const axiosClient = axios.create({ baseURL: REST_API + "/api" })
export const axiosClientConfig: AxiosRequestConfig = { withCredentials: true }

// * Example of interceptor with JWT
/* import { getInLocalStorage, LocalStorageKeys } from "./localStorage"
const updateHeader = (request: AxiosRequestConfig) => {
  const token = getInLocalStorage(LocalStorageKeys.TOKEN)
  const updatedHeader = {
    ...request.headers,
    Authorization: token,
    // "Content-Type": "application/json",
  }
  request.headers = updatedHeader
  return request
}

axiosClient.interceptors.request.use((request) => {
  console.log(`REQUEST ${request.url}`)
  if (request.url?.includes("login")) return request
  const updatedRequest: any = updateHeader(request)
  return updatedRequest
}) */

axiosClient.interceptors.response.use(
  (response) => {
    // console.log("response", response);
    return response
  },
  (err) => {
    /* console.log(`err`)
    console.log(err) // all
    console.log(`err.response`)
    console.log(err.response) // data, headers, status, statusText, config, request
    console.log(`err.response.data`)
    console.log(err.response.data) // server json response
    console.log(`err.response.data.message`)
    console.log(err.response.data.message) // the property message of the server json response
 */
    if (err.code === "ERR_NETWORK") {
      errorToast("No se pudo conectar con el servidor")
      return Promise.reject(err)
    }
    // console.log(err.response.data.message)
    return Promise.reject(err)
  }
)
