import React from "react";
import { Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const NavButton = ({ path, text }: any) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <NavLink
      to={path}
      style={{
        textDecoration: "none",
        color: isActive ? "#7756e3" : "inherit",
        boxShadow: isActive ? "inset 0 -2px 0 #7756e3" : "",
        borderRadius: "unset",
      }}
    >
      <Typography variant="h4" color="inherit">
        {text}
      </Typography>
    </NavLink>
  );
};

export default NavButton;
