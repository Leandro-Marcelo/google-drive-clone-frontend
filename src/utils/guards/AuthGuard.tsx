import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../../store/hook"

export const AuthGuard = () => {
  const authState = useAppSelector((store) => store.auth)

  return authState.currentUser.id !== 0 ? (
    <Outlet />
  ) : (
    <Navigate replace to={"/"} />
  )
}

export default AuthGuard
