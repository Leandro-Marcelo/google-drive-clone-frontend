import { useNavigate } from "react-router-dom"
import svgGoogleLogo from "../../assets/googleLogo.svg"
import { REST_API } from "../../configs"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { authValidateAPI } from "../../services"
import { loginSignUpGoogleReducer } from "../../store/auth/authSlice"

const LoginSignUpPage = () => {
  const auth = useAppSelector((store) => store.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const authValidateFetch = async () => {
      try {
        const response = await authValidateAPI()
        dispatch(loginSignUpGoogleReducer(response.data))
      } catch (err: any) {}
    }

    authValidateFetch()
  }, [])

  useEffect(() => {
    if (auth.currentUser !== null) {
      navigate("/drive")
    }
  }, [auth.currentUser])

  return (
    <div className="w-full h-screen ">
      <div className="flex justify-center items-center h-full">
        <div className="flex  flex-wrap gap-8 justify-center">
          <div className="text-4xl flex flex-col">
            <div className="text-center">Google Drive Clone</div>
            <div className="text-center">created by Leandro Marcelo</div>
          </div>
          <a href={`${REST_API}/api/auth/google`}>
            <div className="border-[1px] border-[#CBCCCF] py-4 px-4 flex items-center  min-w-[320px] gap-4">
              <img
                src={svgGoogleLogo}
                alt="svg google logo"
                className="w-8 h-8 block"
              />
              <div>Sign in with Google</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default LoginSignUpPage
