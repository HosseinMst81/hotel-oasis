import { Button } from "../../primitives";
import Container from "../../primitives/Container/Container";
import { Divider } from "../../primitives/Divider/Divider";
import { Heading } from "../../primitives/Heading/Heading";
import { Image } from "../../primitives/Image/Image";
import Inline from "../../primitives/Inline/Inline";
import { Input } from "../../primitives/Input/Input";
import Loading from "../../primitives/Loading/Loading";
import Text from "../../primitives/Text/Text";
const Test = () => {
  return (
    <div>
      <Loading />
      <Container width="100%" margin="auto">
        <Inline justify="center">
          <Button px={5} colorScheme="primary">
            Primary
          </Button>
          <Button appearance="solid" colorScheme="secondary">
            Secondary
          </Button>
          <Button appearance="subtle" colorScheme="error">
            Error
          </Button>
          <Button appearance="link" colorScheme="info">
            Info
          </Button>
          <Button appearance="outline" colorScheme="dark">
            Dark
          </Button>
          <Button appearance="ghost" colorScheme="light">
            Light
          </Button>
          <Divider />
          <Heading level={1} textColor="success" textAlign="center" mb={4}>
            Welcome
          </Heading>
          <Text fontFamily="primary" fontWeight="black" fontSize="xl" textColor="muted" textAlign="justify" mt={2}>
            This is a paragraph with custom size and alignment.
          </Text>
          <Image src="/src/assets/hero.png" alt="Example" width={300} height={200} objectFit="cover"  mb={2} />
          <Divider />
          <Input placeholder="Enter name" size="base" fullWidth error="Name is required" mb={3} />
          <Divider />
          <Divider />
          <Button appearance="ghost" colorScheme="dark">
            dark
          </Button>
        </Inline>
      </Container>
    </div>
  );
};

export default Test;
