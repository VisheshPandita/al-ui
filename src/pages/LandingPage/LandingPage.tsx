import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { isAuthenticated } from "../../store/features/common";
import Dashboard from "../Dashboard/Dashboard";

const LandingPage = () => {
  const isAuth = useAppSelector(isAuthenticated);
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100% - 72px)",
        overflow: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      {isAuth ? (
        <Dashboard />
      ) : (
        <Box
          sx={{
            height: "calc(40%)",
          }}
        >
          <Typography variant="h1" fontWeight={"bold"} textAlign={"center"}>
            Affiliate your links with influencers.
          </Typography>

          <Grid
            container
            sx={{ display: "flex", justifyContent: "center", gap: 3 }}
            mt={3}
          >
            <Grid item>
              <Button component={Link} to={"/login"} variant="contained">
                <Typography variant="h3">Login</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button component={Link} to={"/signup"} variant="outlined">
                <Typography variant="h3">Sign Up</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
