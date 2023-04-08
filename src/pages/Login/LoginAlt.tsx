import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
const initialFormState = { email: "", password: "" };

// Login with userForm  
const Login = () => {
  const { form, errors, handleTextbox } = useForm(initialFormState);
  const { login } = useContext(AuthContext);

  const onSubmit = () => {
    login(form.email, form.password).catch(() => console.log("failed"));
  };

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
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(40%)",
          width: "calc(40%)",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Grid item>
          <Typography variant="h3">Log In</Typography>
        </Grid>
        <Grid
          container
          item
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
        >
          <Grid item>
            <TextField
              fullWidth
              id="email"
              label="Email"
              placeholder="Enter Email"
              error={Boolean(errors.username)}
              value={form.username}
              onChange={handleTextbox("username", {
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                errorMessage: "Enter a Valid Email Address",
                required: true,
                requiredMessage: "This is a required field",
              })}
            />
            {errors.username && (
              <Typography variant="body2" color={"red"}>
                {errors.username}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="password"
              label="Password"
              placeholder="Enter Password"
              error={Boolean(errors.password)}
              type="password"
              value={form.password}
              onChange={handleTextbox("password", {
                regex: /^.{8,}$/,
                errorMessage: "Min 8 Character Required",
                required: true,
                requiredMessage: "This is a required field",
              })}
            />
            {errors.password && (
              <Typography variant="body2" color={"red"}>
                {errors.password}
              </Typography>
            )}
          </Grid>

          <Grid item>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={onSubmit}
              disabled={Boolean(errors.password) || Boolean(errors.email)}
            >
              <Typography variant="h3">Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
