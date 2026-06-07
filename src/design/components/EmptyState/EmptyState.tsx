import React from "react";
import { Button } from "../../primitives";

interface EmptyStateProps {
  // Define any props for the EmptyState component here
}

const EmptyState: React.FC<EmptyStateProps> = () => {
  return <Button rounded="full">Search Again</Button>;
};

export default EmptyState;
