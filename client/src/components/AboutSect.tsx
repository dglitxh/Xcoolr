import { Container, Grid } from "@nextui-org/react";
import React from "react";

export default function About() {
  return (
    <Container>
      <Grid.Container>
        <Grid lg={6} md={6} sm={6}>
          The best way to monitor student performance in analytics is to use
          data visualization tools. Data visualization tools allow you to easily
          display data in a variety of formats, such as graphs, charts, and
          tables, so that you can quickly identify patterns and trends in
          student performance. Additionally, they allow you to easily filter and
          slice the data to drill down into specific areas of performance. This
          can help you identify areas of strength and weakness, track progress
          over time, and make adjustments as needed. At xcoolr we work hard to
          provide all these and more.
        </Grid>
        <Grid lg={6} md={6} sm={6}>
          <img
            src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
          />
        </Grid>
        <Grid lg={6} md={6} sm={6}>
          The best way to monitor student performance in analytics is to use
          data visualization tools. Data visualization tools allow you to easily
          display data in a variety of formats, such as graphs, charts, and
          tables, so that you can quickly identify patterns and trends in
          student performance. Additionally, they allow you to easily filter and
          slice the data to drill down into specific areas of performance. This
          can help you identify areas of strength and weakness, track progress
          over time, and make adjustments as needed. At xcoolr we work hard to
          provide all these and more.
        </Grid>
        <Grid lg={6} md={6} sm={6}>
          <img
            src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
