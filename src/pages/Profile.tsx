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

const Profile: FC = () => {
  return (
    <Container>
      <Title>User Profile</Title>
      <p>Manage your profile information</p>
    </Container>
  );
};

export default Profile;
