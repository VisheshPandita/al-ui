import { Button, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ButtonWrapper = styled(Button)({
  color: "inherit",
});

export const NavLinkStyles = ({ isActive }: any) => {
  return {
    textDecoration: "none",
    color: isActive ? "#7756e3" : "inherit",
    boxShadow: isActive ? "inset 0 -2px 0 #7756e3" : "",
    borderRadius: "unset",
  };
};

export const NavLinkWrapper = styled(NavLink)({
  textDecoration: "none",
  color: "inherit",
});
