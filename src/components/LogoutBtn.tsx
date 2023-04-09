import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../store/hook"
import { authLogoutAPI } from "../services/auth"
import { logoutReducer } from "../store/auth/authSlice"

const LogoutBtn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const authLogoutFetch = async () => {
    try {
      await authLogoutAPI()
      dispatch(logoutReducer())
    } catch (err: any) {}
  }

  const handleLogout = async () => {
    await authLogoutFetch()
    navigate(`/`)
  }

  return <div onClick={(e) => handleLogout()}>Logout</div>
}
export default LogoutBtn
