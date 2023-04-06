// # COMPONENT TO ADD NOT FOUND ROUTE TO ROUTES
import { Route, Routes } from "react-router-dom"

interface Props {
  //children: React.ReactNode;
  children: JSX.Element | JSX.Element[]
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default RoutesWithNotFound
