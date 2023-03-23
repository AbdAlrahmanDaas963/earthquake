import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Stack, TextField } from "@mui/material";

import "./login.css";
import img from "../../assets/earthquake.png";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="login-screen">
      <img
        className="login-back"
        src={img}
        alt=""
        height={"100vh"}
        width={"auto"}
      />
      <Stack
        height={"100vh"}
        width={"400px"}
        paddingLeft={"100px"}
        paddingRight={"100px"}
        margin={"0"}
        alignItems={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
        className="form-container"
      >
        <form onSubmit={formik.handleSubmit} className="form">
          <Stack className="form-header">
            <div>earthquake 2023</div>
            <div>work group</div>
          </Stack>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email,username or phone"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="form-input"
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
            className="form-input"
          />
          <Button color="error" variant="contained" fullWidth type="submit">
            Log-In
          </Button>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div>don't have account?</div>
            <a href="">Sign up</a>
          </Stack>
        </form>
      </Stack>
    </div>
  );
}

export default Login;
