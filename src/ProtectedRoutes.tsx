import { useAppSelector } from "./store/hooks";
import { isAuthenticated } from "./store/features/common";
import { Outlet, useNavigate } from "react-router-dom";
import { lazy, useEffect } from "react";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const isAuth = useAppSelector(isAuthenticated);

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, []);

  return <Outlet />;
}

// Add private Routes Here
export const routes = [
  {
    path: "/profile",
    element: lazy(() => import("./pages/Profile/Profile")),
  },
];
