import React from "react";
import "./feeds.css";
import { Container, Stack } from "@mui/material";

import Post from "./common/Post";
import Header from "../../components/header/Header";

function Feeds() {
  const posts = [
    {
      id: 1,
      name: "another name",
      title: "helper",
      time: "13 hours ago",
      content: "we need more hand to save people",
      votes: "+90k",
      btn: "details",
    },
    {
      id: 2,
      name: "breaking news",
      title: "global channel",
      time: "11m ago",
      content:
        "In 2017 a drought ravaged Somaliathat has left more than 6 million people, or half the country's population, facing food shortages with several water supplies becoming undrinkable due to the possibility of infection",
      votes: "+180k",
      btn: "location",
    },
    {
      id: 3,
      name: "john",
      title: "person",
      time: "1 week ago",
      content: "Syrian Turki border earthquake !!!  ",
      votes: "+3k",
      btn: "how to reach them",
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Stack alignItems={"center"} height={"fit-content"}>
          {posts.map((item) => (
            <Post
              key={item.id}
              name={item.name}
              title={item.title}
              time={item.time}
              content={item.content}
              votes={item.votes}
              btn={item.btn}
            />
          ))}
          {/* <Post />
          <Post />
          <Post />
          <Post /> */}
        </Stack>
      </Container>
    </>
  );
}

export default Feeds;
