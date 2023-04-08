import { Box, Typography } from "@mui/material";

const Profile = () => {
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
      <Typography variant="h3">Profile</Typography>
    </Box>
  );
};

export default Profile;
