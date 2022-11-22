import { Card, Grid, Text, Row, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export function MyCard(props: any) {
  const data = props.data;

  return (
    <Card isHoverable variant="bordered" css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <Image alt="svg" src={data.icon} width="34px" height="34px" />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {data.heading}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{data.text.slice(0, 94)}...</Text>
      </Card.Body>
      <Card.Footer>
        <Row justify="flex-end">
          <Button
            onPress={() => props.chooseItem(data)}
            auto
            flat
            color="primary"
          >
            Learn more
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}
