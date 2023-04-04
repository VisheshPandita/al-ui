import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginValidationSchema } from "./Login.utls";
import { authenticate } from "../../store/features/common";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    // TODO: api call create async thunk
    dispatch(authenticate({ token: "abcd" }));
    navigate("/profile");

    console.log(values);
  };

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
        Log In
      </Typography>
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
          <Typography fontWeight={"bold"}>Submit</Typography>
        </Button>
      </form>
    </Box>
  );
};

export default Login;
