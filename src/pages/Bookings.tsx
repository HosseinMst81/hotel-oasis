import type { FC } from "react";
import styled from "styled-components";
import { BookingsList } from "../components/Bookings/BookingsList";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
`;

const Bookings: FC = () => {
  return (
    <Container>
      <Title>Bookings</Title>
      <p>Manage all bookings</p>
      <BookingsList/>
    </Container>
  );
};

export default Bookings;
