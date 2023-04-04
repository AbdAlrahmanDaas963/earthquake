import React from "react";

import { Box, Paper, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import { Info } from "@mui/icons-material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Post({ name, title, time, content, votes, btn }) {
  return (
    <Stack
      className="post"
      gap={"15px"}
      sx={{ backgroundColor: "background.paper" }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box
            display={"flex"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            sx={{ marginLeft: "10px" }}
          >
            <Typography variant="h2">{name}</Typography>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Stack>
        <Typography
          variant="h6"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <AccessTimeIcon fontSize="small" /> {time}
        </Typography>
      </Stack>

      <Stack textAlign={"left"}>{content}</Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <ArrowCircleUpIcon htmlColor="green" />
          <Box marginX={"5px"}>{votes}</Box>
          <ArrowCircleDownIcon htmlColor="red" sx={{ color: "error.main" }} />
        </Box>
        <Button variant="contained" color="error" startIcon={<Info />}>
          {btn}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Post;
