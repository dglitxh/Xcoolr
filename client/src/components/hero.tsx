import { Container, Grid, Text } from "@nextui-org/react";
import react from "react";

export default function Hero() {
  return (
    <Container lg>
      <Grid.Container>
        <Grid xs={12} sm={6} md={6} lg={6}>
          <Text h2 b size={65}>
            The Xcoolr Client
          </Text>
          <Text>
            provides you with the most comprehensive student performance
            monitoring platform on the market. We are know to deliver insightful
            and in depth understanding of student's performance.
          </Text>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={6}>
          <img src={require("")} />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
