import type { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
`;

const Login: FC = () => {
  return (
    <Container>
      <Title>Login</Title>
      <p>Sign in to your account</p>
    </Container>
  );
};

export default Login;
