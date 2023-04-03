import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box marginTop={"10%"}>
      <Typography variant="h1" fontWeight={"bold"} textAlign={"center"}>
        Affiliate your links with influencers.
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"20px"}
        marginTop={"5%"}
      >
        <Button component={Link} to={"/login"} variant="contained">
          <Typography fontWeight={"bold"}>Login</Typography>
        </Button>
        <Button component={Link} to={"/signin"} variant="outlined">
          <Typography fontWeight={"bold"}>Sign Up</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
