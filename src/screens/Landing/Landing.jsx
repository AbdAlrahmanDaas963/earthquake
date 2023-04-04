import React from "react";
import Header from "../../components/header/Header";
import { Container, Stack, Box, Paper, Typography } from "@mui/material";

function Landing() {
  return (
    <Stack direction={"column"} width={"100vw"}>
      <Header />
      <Container>
        <Box
          position={"relative"}
          height={"50vh"}
          minHeight={"500px"}
          width={"100%"}
        >
          <Box position={"absolute"} height={"100%"}>
            <Paper sx={{ backgroundColor: "Background.dim" }}></Paper>
          </Box>
          <Box position={"absolute"} width={"100%"} height={"100%"}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              height={"100%"}
            >
              <Typography variant="h3">earthquake 2023 </Typography>
              <Typography variant="h4">كن اول من يساعد</Typography>
              <Typography variant="h5">ابدا الان</Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
}

export default Landing;
