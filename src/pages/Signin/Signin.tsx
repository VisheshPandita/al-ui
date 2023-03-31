import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { signinValidationSchema } from "./Signin.utils";

const Signin = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

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
        maxWidth: 500,
        marginX: "auto",
        marginTop: "15%",
      }}
    >
      <Typography
        variant="h3"
        textAlign={"center"}
        marginBottom={"20px"}
        fontWeight={"bold"}
      >
        Sign In
      </Typography>
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
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
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
          <Typography fontWeight={"bold"}>Submit</Typography>
        </Button>
      </form>
    </Box>
  );
};

export default Signin;
