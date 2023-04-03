import { Box, Divider, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { isAuthenticated } from "../../store/features/common";
import { ButtonWrapper, NavLinkStyles, NavLinkWrapper } from "./Navbar.styles";
import { NavLink } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";

const Navbar = () => {
  const isAuth = useAppSelector(isAuthenticated);

  return (
    <Box component="nav">
      <Grid container>
        <Grid xs={3} item>
          <NavLinkWrapper to="/">
            <Typography
              variant="h5"
              display={"flex"}
              alignItems={"center"}
              fontWeight={"bold"}
            >
              <LinkIcon />
              Affiliated Link
            </Typography>
          </NavLinkWrapper>
        </Grid>
        <Grid xs={6} display={"flex"} justifyContent={"center"} item>
          <NavLink to="/" style={NavLinkStyles}>
            <ButtonWrapper>
              <Typography fontWeight={"500"}>Home</Typography>
            </ButtonWrapper>
          </NavLink>
          <NavLink to="/about" style={NavLinkStyles}>
            <ButtonWrapper>
              <Typography fontWeight={"500"}>About</Typography>
            </ButtonWrapper>
          </NavLink>
        </Grid>
        <Grid xs={3} display={"flex"} justifyContent={"right"} item>
          {isAuth && (
            <NavLink to="/profile" style={NavLinkStyles}>
              <ButtonWrapper>
                <Typography fontWeight={"500"}>Profile</Typography>
              </ButtonWrapper>
            </NavLink>
          )}
          {!isAuth && (
            <NavLink to="/login" style={NavLinkStyles}>
              <ButtonWrapper>
                <Typography fontWeight={"500"}>LogIn</Typography>
              </ButtonWrapper>
            </NavLink>
          )}
          {!isAuth && (
            <NavLink to="/signup" style={NavLinkStyles}>
              <ButtonWrapper>
                <Typography fontWeight={"500"}>Sign Up</Typography>
              </ButtonWrapper>
            </NavLink>
          )}
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default Navbar;
