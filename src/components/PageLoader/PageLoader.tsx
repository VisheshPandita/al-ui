import { Box, CircularProgress } from "@mui/material";

const PageLoader = () => (
  <Box
    display="flex"
    height="100%"
    justifyContent="center"
    alignItems="center"
    sx={{ color: "#91B0FA" }}
  >
    <CircularProgress size="5rem" color="inherit" />
  </Box>
);

export default PageLoader;
