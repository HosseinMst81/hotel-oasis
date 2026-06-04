import type { FC } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const AuthCard = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  width: 100%;
  max-width: 400px;
`;

const Branding = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const BrandTitle = styled.h1`
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  color: #1f2937;
  font-weight: 700;
`;

const BrandSubtitle = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
`;

const AuthLayout: FC = () => {
  return (
    <LayoutContainer>
      <AuthCard>
        <Branding>
          <BrandTitle>Hotel Oasis</BrandTitle>
          <BrandSubtitle>Management System</BrandSubtitle>
        </Branding>
        <Outlet />
      </AuthCard>
    </LayoutContainer>
  );
};

export default AuthLayout;