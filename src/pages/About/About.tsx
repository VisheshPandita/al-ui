import { Box, Typography } from "@mui/material";
const About = () => {
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
      <Typography variant="h3">About</Typography>
    </Box>
  );
};

export default About;
