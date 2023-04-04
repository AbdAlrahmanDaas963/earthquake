import React from "react";

import { Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "background.paper2" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Earthquake
          </Typography>
          <Button color="inherit">
            <Link to={"/account/login"}>Login</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/account/signup"}>Signup</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/feeds"}>Feeds</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
