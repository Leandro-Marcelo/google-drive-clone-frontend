import { Provider } from "react-redux"
import store from "./store/store"
import { BrowserRouter, Route } from "react-router-dom"
import RoutesWithNotFound from "./components/RoutesWithNotFound"
import { AuthenticatedRoutes, PublicRoutes } from "./utils/constants"
import AuthGuard from "./utils/guards/AuthGuard"
import LoginSignUpPage from "./pages/Public/LoginSignUpPage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Drive from "./pages/Authenticated/Drive/Index"
import Test from "./pages/Test"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<LoginSignUpPage />} />
          <Route path="/test" element={<Test />} />
          <Route element={<AuthGuard />}>
            <Route
              path={`${AuthenticatedRoutes.DRIVE}/*`}
              element={<Drive />}
            />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
      <ToastContainer />
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
