import { Col, Container, Text } from "@nextui-org/react";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Col
        span={2}
        css={{ backgroundColor: "gray", borderRight: "2px solid red" }}
      >
        <Container justify="center">
          <Text size={22} b h1>
            {" "}
            Xcooler Dash
          </Text>
          <Text></Text>
        </Container>
      </Col>
      <Col span={10}></Col>
    </div>
  );
}
