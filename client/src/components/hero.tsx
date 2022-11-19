import { Container, Text, Row } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  return (
    <Container sm>
      {/* <Grid.Container>
        <Grid xs={12} sm={6} md={6} lg={6} justify="center"> */}
      <Row>
        <Text h2 b size={65}>
          The Xcoolr Client
        </Text>
      </Row>
      <Row>
        <Text>
          provides you with the most comprehensive student performance
          monitoring platform on the market. We are know to deliver insightful
          and in depth understanding of student's performance in the most
          interactive way possible.
        </Text>
      </Row>
    </Container>
  );
}
