import React from "react";

import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

import { Button, Stack } from "@mui/material";

import AppTextInput from "./common/AppTextInput";

const validationSchema = yup.object({
  firstname: yup.string(),
  lastname: yup.string(),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.number(),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form form-signup">
      <Stack className="form-header">
        <div>earthquake 2023</div>
        <div>work group</div>
      </Stack>

      <Stack direction={"row"}>
        <AppTextInput
          id={"firstname"}
          name={"firstname"}
          label={"firstname"}
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <AppTextInput
          id={"lastname"}
          name={"lastname"}
          label={"lastname"}
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
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
        id={"phone"}
        name={"phone"}
        label={"phone"}
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
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
      <AppTextInput
        id="confirmPassword"
        name="confirmPassword"
        label="confirmPassword"
        type="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />

      <Button color="error" variant="contained" fullWidth type="submit">
        Sign-up
      </Button>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <div>already have account?</div>
        <Link to={"/account/login"}>Login</Link>
      </Stack>
    </form>
  );
}

export default Signup;
