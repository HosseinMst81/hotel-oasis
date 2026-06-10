import { Button } from "../../primitives";
import Inline from "../../primitives/Inline/inline";
import Loading from "../../primitives/Loading/Loading";

const Test = () => {
  return (
    <div>
      <Loading />
      <Inline spacing={2} justify="space-around">
        <Button colorScheme="primary">Primary</Button>
        <Button colorScheme="secondary">Secondary</Button>
        <Button colorScheme="error">Error</Button>
        <Button colorScheme="info">Info</Button>
        <Button colorScheme="dark">Dark</Button>
        <Button colorScheme="light">Light</Button>
      </Inline>
    </div>
  );
};

export default Test;
