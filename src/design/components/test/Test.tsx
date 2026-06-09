import { Button } from "../../primitives";
import Text from "../../primitives/Text/Text";

const Test = () => {
  return (
    <div>
      <Button rounded="full"  size="base" colorScheme="primary">
        CLick
      </Button>
      <Button rounded="full" size="lg" colorScheme="secondary">
        CLick
      </Button>
      <Button rounded="full" size="xl" colorScheme="dark">
        CLick
      </Button>
      <Button rounded="full" size="xs" colorScheme="light">
        CLick
      </Button>
      <Button rounded="full" size="base" colorScheme="foreground">
        CLick
      </Button>
      <Button rounded="full" size="sm" colorScheme="info">
        CLick
      </Button>
      <Button rounded="full" size="base" colorScheme="error">
        CLick
      </Button>
      <Button rounded="full" size="base" colorScheme="success">
        CLick
      </Button>

      <Text textColor="success" fullWidth={true} size="xl" textAlign="center" className="w-full" fontFamily="mono">
        Primary Text
      </Text>
    </div>
  );
};

export default Test;
