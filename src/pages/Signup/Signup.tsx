import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { signinValidationSchema } from "./Signup.utils";

const Signin = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };
  // TODO: remove formik dependency

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signinValidationSchema,
    onSubmit: onSubmit,
  });

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
          height: "calc(50%)",
          width: "calc(40%)",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Grid item>
          <Typography
            variant="h3"
            textAlign={"center"}
            marginBottom={"20px"}
            fontWeight={"bold"}
          >
            Sign Up
          </Typography>
        </Grid>
        <Grid item>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                sx={{
                  marginBottom: "20px",
                  width: "48%",
                }}
              />
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                sx={{
                  marginBottom: "20px",
                  width: "48%",
                }}
              />
            </Box>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                marginBottom: "20px",
              }}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{
                marginBottom: "20px",
              }}
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              sx={{
                marginBottom: "20px",
              }}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              <Typography variant="h3">Submit</Typography>
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
