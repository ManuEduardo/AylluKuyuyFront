import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "../models";
import { useFamilyContext, useSetFamilyContext } from "../context/FamilyProvider";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

export const ProtectedRoute = ({
  redirectTo,
}: ProtectedRouteProps): JSX.Element => {
  const family = useFamilyContext();
  const setFamily = useSetFamilyContext();
  const [storageCodFam, setStorageCodFam] = useLocalStorage<number>(
    "codigo_familia",
    0
  );
  if (storageCodFam == 0) {
    return <Navigate to={redirectTo} replace />;
  }
  useEffect(() => {
    setFamily({
      cod_familia: storageCodFam,
      contrasena: 0,
      nombre: "Familia",
    });
  }, [setFamily, storageCodFam]);
  return <Outlet />;
};
