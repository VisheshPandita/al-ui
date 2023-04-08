import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginValidationSchema } from "./Login.utls";
import { authenticate } from "../../store/features/common";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const onSubmit = (values: any) => {
    console.log(values);
    login(values.email, values.password).catch(() => console.log("failed"));
  };
  // TODO: remove formik dependency

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
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
          height: "calc(40%)",
          width: "calc(40%)",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Grid item>
          <Typography variant="h3">Log In</Typography>
        </Grid>
        <Grid item>
          <form onSubmit={formik.handleSubmit}>
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
            <Button color="primary" variant="contained" fullWidth type="submit">
              <Typography variant="h3">Submit</Typography>
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
