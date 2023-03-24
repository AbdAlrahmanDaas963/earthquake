import React from "react";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

import { Button, Stack } from "@mui/material";

import AppTextInput from "./common/AppTextInput";

import "./login.css";

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
    <form onSubmit={formik.handleSubmit} className="form">
      <Stack className="form-header">
        <div>earthquake 2023</div>
        <div>work group</div>
      </Stack>

      <AppTextInput
        id={"email"}
        name={"email"}
        label={"Email,username or phone"}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <AppTextInput
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Button color="error" variant="contained" fullWidth type="submit">
        Log-In
      </Button>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <div>don't have account?</div>
        <Link to={"/account/signup"}>Signup</Link>
      </Stack>
    </form>
  );
}

export default Login;
