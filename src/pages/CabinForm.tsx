import type { FC } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
`;

const CabinForm: FC = () => {
  const { cabinId } = useParams<{ cabinId: string }>();

  return (
    <Container>
      <Title>{cabinId ? "Edit Cabin" : "Create New Cabin"}</Title>
      <p>Manage cabin details and amenities</p>
    </Container>
  );
};

export default CabinForm;
