import { useNavigate } from "react-router-dom"
import { authLogoutAPI } from "../../../../services"
import { logoutReducer } from "../../../../store/auth/authSlice"
import { useAppDispatch } from "../../../../store/hook"
import { PublicRoutes } from "../../../../utils/constants"

const Index = () => {
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

  return (
    <div>
      <div>MyDrive</div>
      <div onClick={(e) => handleLogout()}>Logout</div>
    </div>
  )
}
export default Index
