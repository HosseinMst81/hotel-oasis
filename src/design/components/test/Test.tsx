import { Button } from "../../primitives";
import Container from "../../primitives/Container/Container";
import Inline from "../../primitives/Inline/Inline";
import Loading from "../../primitives/Loading/Loading";

const Test = () => {
  return (
    <div>
      <Loading />
      <Container width="100%" margin="auto">
        <Inline justify="center">
          <Button px={5} colorScheme="primary">
            Primary
          </Button>
          <Button appearance="solid" colorScheme="secondary">Secondary</Button>
          <Button appearance="subtle" colorScheme="error">Error</Button>
          <Button appearance="link" colorScheme="info">Info</Button>
          <Button appearance="outline" colorScheme="dark">Dark</Button>
          <Button appearance="ghost" colorScheme="light">Light</Button>
          <Button appearance="ghost" colorScheme="dark">dark</Button>
        </Inline>
      </Container>
    </div>
  );
};

export default Test;
