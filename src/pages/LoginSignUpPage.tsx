import svgGoogleLogo from "../assets/googleLogo.svg"

const LoginSignUpPage = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex justify-center items-center h-full">
        <div className="flex  flex-wrap gap-8 justify-center">
          <div className="text-4xl flex flex-col">
            <div className="text-center">Google Drive Clone</div>
            <div className="text-center">created by Leandro Marcelo</div>
          </div>
          <div className="border-[1px] border-[#CBCCCF] py-4 px-4 flex items-center  min-w-[320px] gap-4">
            <img
              src={svgGoogleLogo}
              alt="svg google logo"
              className="w-8 h-8 block"
            />
            <div>Sign in with Google</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginSignUpPage
