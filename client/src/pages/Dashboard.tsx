import { Col, Container, Text, Row, Link, Grid, Card } from "@nextui-org/react";
import { EditIcon } from "../components/icons";
import React from "react";
import NavBar from "../components/NavBar";
import GenDash from "../components/charts/general";

export default function Dashboard() {
  const menu = [
    "Students",
    "Teachers",
    "Subjects",
    "Ratings",
    "Analytics",
    "Scores",
  ];
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Col
          span={2}
          css={{
            backgroundColor: "$blue50",
            // borderRight: "0.5px solid gray",
            height: "90vh",
          }}
        >
          <Container justify="center" alignContent="center">
            {menu.map((item, index) => (
              <Row key={index} justify="center" align="center">
                <Link>
                  <Text size={20} css={{ lineHeight: "80px" }}>
                    <EditIcon
                      fill="gray"
                      filled
                      size={20}
                      height={20}
                      width={20}
                      label=""
                    />
                    {item}
                  </Text>
                </Link>
              </Row>
            ))}
          </Container>
        </Col>
        <Col span={10}>
          <Container>
          <Grid.Container gap={2} css={{marginTop: "$10", marginBottom: "$10"}}>
      <Grid xs={4}>
        <Card variant='bordered'>
          <Card.Body>
            <Text>Default card</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Text>Flat card.</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Text>Bordered card.</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
            <Grid.Container gap={2}>
              <Grid lg={4} md={4} sm={4}>
              <Card >
              <Card.Body>
                     {" "}
                <GenDash />
              </Card.Body>
              </Card>
             
              </Grid>
              <Grid lg={4} md={4} sm={4}>
              <Card variant="flat">
              <Card.Body>
                     {" "}
                <GenDash />
              </Card.Body>
              </Card>
             
              </Grid>
               <Grid lg={4} md={4} sm={4}>
              <Card variant="flat">
              <Card.Body>
                     {" "}
                <GenDash />
              </Card.Body>
              </Card>
             
              </Grid>
            </Grid.Container>
          </Container>
        </Col>
      </Container>
    </div>
  );
}
