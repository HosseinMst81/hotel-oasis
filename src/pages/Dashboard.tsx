import type { FC } from "react";
import styled from "styled-components";
import DesignTokensTestDashboard from "../design/components/test/DesignTokensTestDashboard";
import Container from "../design/primitives/Container/Container";

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
`;

const Dashboard: FC = () => {
  return (
    <Container p={5}>
      <Title>Dashboard</Title>
      <p>Welcome to the hotel management dashboard</p>
      <DesignTokensTestDashboard/>
    </Container>
  );
};

export default Dashboard;
