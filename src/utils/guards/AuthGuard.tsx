import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../../store/hook"

export const AuthGuard = () => {
  console.log("AuthGuard")
  const storeAuth = useAppSelector((store) => store.auth)

  return storeAuth.currentUser !== null ? (
    <Outlet />
  ) : (
    <Navigate replace to={"/"} />
  )
}

export default AuthGuard
