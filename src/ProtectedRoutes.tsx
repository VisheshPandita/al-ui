import { useAppSelector } from "./store/hooks";
import { isAuthenticated } from "./store/features/common";
import { Navigate, Outlet } from "react-router-dom";
import { lazy, useEffect } from "react";

export default function PrivateRoute() {
  const isAuth = useAppSelector(isAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

// Add private Routes Here
export const routes = [
  {
    path: "/profile",
    element: lazy(() => import("./pages/Profile/Profile")),
  },
];
