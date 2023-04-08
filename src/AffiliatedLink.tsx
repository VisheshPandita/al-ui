import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import { Box, CircularProgress } from "@mui/material";
import PrivateRoute, { routes } from "./ProtectedRoutes";
import { Suspense } from "react";
import AuthContextProvider from "./context/AuthContext";
import { useAppSelector } from "./store/hooks";
import { isAuthenticated } from "./store/features/common";
import PageLoader from "./components/PageLoader/PageLoader";

function AffiliatedLink() {
  const isAuth = useAppSelector(isAuthenticated);

  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/login"
          element={
            isAuth ? <Navigate to="/profile" replace={true} /> : <Login />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            isAuth ? <Navigate to="/profile" replace={true} /> : <Signup />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>

        <Route element={<PrivateRoute />}>
          {routes?.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Suspense fallback={<PageLoader />}>
                    <route.element />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default AffiliatedLink;
