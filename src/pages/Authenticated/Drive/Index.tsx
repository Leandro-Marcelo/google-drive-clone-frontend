import { Navigate, Route } from "react-router-dom"
import { AuthenticatedRoutes } from "../../../utils/constants"
import MyDrive from "./MyDrive/Index"
import InFolder from "./Folder/Index"
import RoutesWithNotFound from "../../../components/RoutesWithNotFound"

const Index = () => {
  return (
    <RoutesWithNotFound>
      <Route
        path={`/`}
        element={<Navigate to={AuthenticatedRoutes.MY_DRIVE} />}
      />
      {/* My_Drive is the root */}
      <Route path={AuthenticatedRoutes.MY_DRIVE} element={<MyDrive />} />
      {/*//# PAGES */}
      <Route
        path={`${AuthenticatedRoutes.FOLDER}/:folderId`}
        element={<InFolder />}
      />
      {/*  <Route path={`/test`} element={<Paypal />} /> */}
    </RoutesWithNotFound>
  )
}
export default Index
