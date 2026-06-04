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

const Settings: FC = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <p>Configure application settings</p>
    </Container>
  );
};

export default Settings;
