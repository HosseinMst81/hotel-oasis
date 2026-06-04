import type { FC } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

const NotFound: FC = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page not found</Subtitle>
      <StyledLink to="/dashboard">Back to Dashboard</StyledLink>
    </Container>
  );
};

export default NotFound;
