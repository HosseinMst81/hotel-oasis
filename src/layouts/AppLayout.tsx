import type { FC } from "react";
import { Outlet, Link, useLocation } from "react-router";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9fafb;
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: #1f2937;
  padding: 2rem 0;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 1rem 1.5rem;
  color: ${(props) => (props.$active ? "#ffffff" : "#d1d5db")};
  background-color: ${(props) => (props.$active ? "#374151" : "transparent")};
  text-decoration: none;
  transition: all 0.2s;
  border-left: 3px solid ${(props) => (props.$active ? "#3b82f6" : "transparent")};

  &:hover {
    background-color: #374151;
    color: #ffffff;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #ffffff;
  padding: 1.5rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e7eb;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #1f2937;
  font-weight: 600;
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const AppLayout: FC = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Bookings", path: "/bookings" },
    { label: "Cabins", path: "/cabins" },
    { label: "Users", path: "/users" },
    { label: "Settings", path: "/settings" },
    { label: "Profile", path: "/profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <LayoutContainer>
      <Sidebar>
        <Nav>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              $active={isActive(item.path)}
            >
              {item.label}
            </NavItem>
          ))}
        </Nav>
      </Sidebar>
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