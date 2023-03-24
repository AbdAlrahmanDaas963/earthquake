import React from "react";
import { Outlet } from "react-router";

import { Stack } from "@mui/material";

import img from "../../assets/earthquake.png";

function SigninContainer() {
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
        <Outlet />
      </Stack>
    </div>
  );
}

export default SigninContainer;
