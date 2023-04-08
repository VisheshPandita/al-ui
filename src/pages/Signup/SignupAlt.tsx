import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useForm from "../../hooks/useForm";
const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Signup with useForm
const Signin = () => {
  const { form, errors, handleTextbox } = useForm(initialFormState);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100% - 72px)",
        width: "calc(100%)",
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
          height: "calc(70%)",
          width: "calc(40%)",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Grid item>
          <Typography variant="h3">Sign Up</Typography>
        </Grid>
        <Grid
          container
          item
          sx={{
            display: "flex",
            width: "calc(100%)",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Grid
            item
            container
            sx={{
              display: "flex",
              width: "calc(100%)",
              gap: 3,
              justifyContent: "center",
            }}
          >
            <Grid item xs={5.6}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                placeholder="Enter First Name"
                error={Boolean(errors.firstName)}
                value={form.firstName}
                onChange={handleTextbox("firstName", {
                  required: true,
                  requiredMessage: "This is a required field",
                })}
              />
              {errors.firstName && (
                <Typography variant="body2" color={"red"}>
                  {errors.firstName}
                </Typography>
              )}
            </Grid>
            <Grid item xs={5.6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                placeholder="Enter Last Name"
                error={Boolean(errors.lastName)}
                value={form.lastName}
                onChange={handleTextbox("lastName", {
                  required: true,
                  requiredMessage: "This is a required field",
                })}
              />
              {errors.lastName && (
                <Typography variant="body2" color={"red"}>
                  {errors.lastName}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              id="email"
              label="Email"
              placeholder="Enter Email Address"
              error={Boolean(errors.email)}
              value={form.email}
              onChange={handleTextbox("email", {
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                errorMessage: "Enter a Valid Email Address",
                required: true,
                requiredMessage: "This is a required field",
              })}
            />
            {errors.email && (
              <Typography variant="body2" color={"red"}>
                {errors.email}
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
            <TextField
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              error={Boolean(errors.confirmPassword)}
              type="password"
              value={form.confirmPassword}
              onChange={handleTextbox("confirmPassword", {
                regex: /^.{8,}$/,
                errorMessage: "Min 8 Character Required",
                required: true,
                requiredMessage: "This is a required field",
              })}
            />
            {errors.confirmPassword && (
              <Typography variant="body2" color={"red"}>
                {errors.confirmPassword}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              onClick={onSubmit}
              disabled={
                !Object.values(errors).every((x) => x === null || x === "")
              }
            >
              <Typography variant="h3">Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
