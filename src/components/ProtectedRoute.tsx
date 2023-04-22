import { Navigate, Outlet } from "react-router-dom";
import {ProtectedRouteProps} from '../models'
import { useFamilyContext } from "../context/FamilyProvider";

export const ProtectedRoute = ({
  redirectTo,
}: ProtectedRouteProps):JSX.Element => {
    const family = useFamilyContext()
    //f (family.cod_familia == 0) {
  if (family.cod_familia == 0) {
    return <Navigate to={redirectTo} replace />;
  }
  return <Outlet/>;
};