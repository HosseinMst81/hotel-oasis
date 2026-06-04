import type { FC } from "react";
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

const Cabins: FC = () => {
  return (
    <Container>
      <Title>Cabins</Title>
      <p>Manage all cabins and accommodations</p>
    </Container>
  );
};

export default Cabins;
