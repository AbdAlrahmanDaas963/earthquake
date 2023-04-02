import React from "react";

import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import { Info } from "@mui/icons-material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Post({ name, title, time, content, votes, btn }) {
  return (
    <Stack className="post" gap={"10px"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box>
            <div>{name}</div>
            <div>{title}</div>
          </Box>
        </Stack>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <AccessTimeIcon />
          <div>{time}</div>
        </Box>
      </Stack>

      <Stack>{content}</Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <ArrowCircleUpIcon htmlColor="green" />
          <Box marginX={"5px"}>{votes}</Box>
          <ArrowCircleDownIcon htmlColor="red" />
        </Box>
        <Button variant="outlined" startIcon={<Info />}>
          {btn}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Post;
