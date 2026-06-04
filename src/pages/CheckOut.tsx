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

const CheckOut: FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();

  return (
    <Container>
      <Title>Check-Out</Title>
      <p>Process check-out for booking ID: {bookingId}</p>
    </Container>
  );
};

export default CheckOut;
