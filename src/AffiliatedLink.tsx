import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";

function AffiliatedLink() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </>
  );
}

export default AffiliatedLink;
