import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SigninContainer from "./screens/signin/SigninContainer";
import Login from "./screens/signin/Login";
import Signup from "./screens/signin/Signup";
import Feeds from "./screens/feeds/Feeds";

import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
    error: {
      main: "#880601",
      contrastText: "#EDCBC9",
    },
    background: {
      paper: "#EDCBC9",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account",
    element: <SigninContainer />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/feeds",
    element: <Feeds />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
