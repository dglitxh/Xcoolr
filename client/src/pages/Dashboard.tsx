import { Col, Container, Text } from "@nextui-org/react";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Col span={3} css={{ backgroundColor: "gray" }}>
        <Container>
          <Text size={22} b h1>
            {" "}
            Xcooler Dash
          </Text>
          <Text></Text>
        </Container>
      </Col>
      <Col span={9}></Col>
    </div>
  );
}
