import { Box, Divider, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { isAuthenticated } from "../../store/features/common";
import { ButtonWrapper, NavLinkStyles, NavLinkWrapper } from "./Navbar.styles";
import { NavLink } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import ProfilePopper from "./ProfilePopper";
import NavButton from "../Button/NavButton";

const Navbar = () => {
  const isAuth = useAppSelector(isAuthenticated);
  // TODO: make button component with sx

  return (
    <Box
      sx={{
        minHeight: "72px",
        maxHeight: "min-content",
        padding: "0 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">
            <Typography variant="h3">
              <LinkIcon />
              Affiliated Link
            </Typography>
          </NavLink>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "center", gap: 2 }}
        >
          <NavButton path="/" text="Home" />
          <NavButton path="/about" text="About" />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
        >
          {isAuth ? (
            <ProfilePopper />
          ) : (
            <>
              <NavButton path="/login" text="LogIn" />
              <NavButton path="/signup" text="SignUp" />
            </>
          )}
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default Navbar;
