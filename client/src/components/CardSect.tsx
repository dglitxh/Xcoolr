import { Container, Grid } from "@nextui-org/react";
import React from "react";
import { cardData } from "./assets/data";
import { MyCard } from "./mCard";

export default function CardSection() {
  return (
    <Container lg>
      <Grid.Container justify="center">
        {cardData.map((item) => {
          return (
            <Grid md={4} sm={4} lg={4}>
              <MyCard data={item} />
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
}
