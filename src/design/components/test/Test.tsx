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
          <Button colorScheme="secondary">Secondary</Button>
          <Button colorScheme="error">Error</Button>
          <Button colorScheme="info">Info</Button>
          <Button colorScheme="dark">Dark</Button>
          <Button colorScheme="light">Light</Button>
        </Inline>
      </Container>
    </div>
  );
};

export default Test;
