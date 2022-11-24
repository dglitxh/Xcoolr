import { Container, Text, Row } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  return (
    <Container sm>
      <div className="hero">
        <Row>
          <Text h2 b color={"blue"} size={65}>
            The Xcoolr Client
          </Text>
        </Row>
        <Row>
          <Text size={25}>
            provides you with the most comprehensive student performance
            monitoring platform on the market. We are known to deliver
            insightful and in-depth understanding of student's performance in
            the most interactive way possible.
          </Text>
        </Row>
      </div>
    </Container>
  );
}
