import { Container, Grid } from "@nextui-org/react";
import React from "react";

export default function About() {
  return (
    <Container>
      <Grid.Container>
        <Grid lg={6} md={6} sm={6}></Grid>
        <Grid lg={6} md={6} sm={6}></Grid>
      </Grid.Container>
    </Container>
  );
}
