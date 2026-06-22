import type { FC } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-brand-background);
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: var(--color-brand-background);
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--color-border-base);
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: var(--color-text-primary);
  font-weight: 600;
  font-family: var(--font-primary);
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--space-8);
`;

const AppLayout: FC = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Header>
          <HeaderTitle>Hotel Oasis Management</HeaderTitle>
        </Header>
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainContent>
    </LayoutContainer>
  );
};

export default AppLayout;