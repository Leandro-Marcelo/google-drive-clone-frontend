import { Provider } from "react-redux"
import store from "./store/store"
import { BrowserRouter, Route } from "react-router-dom"
import RoutesWithNotFound from "./components/RoutesWithNotFound"
import { PrivateRoutes, PublicRoutes } from "./utils/constants"
/* import AuthGuard from "./utils/guards/AuthGuard" */
import LoginSignUpPage from "./pages/LoginSignUpPage"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<LoginSignUpPage />} />
          {/* <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.DRIVE}/*`} element={<Drive />} />
          </Route> */}
        </RoutesWithNotFound>
      </BrowserRouter>
    </Provider>
  )
}

export default App

{
  /* <div className="h-screen w-full bg-[#fff]">
            <Navbar />
            <Sidebar />
        </div> */
}
