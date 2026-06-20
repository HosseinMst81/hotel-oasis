import { useEffect, useState, type FC } from "react";
import { Link, useLocation } from "react-router";
import styled from "styled-components";
import {
  TbLayoutDashboard,
  TbBookmark,
  TbMapPin,
  TbUsers,
  TbSettings,
  TbSettings2,
  TbLogout,
  TbSun,
  TbMoon,
} from "react-icons/tb";

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: var(--space-8) var(--space-6);
  border-right: 3px solid var(--color-border-base);
  position: sticky;
  top: 0;
  background-color: var(--color-brand-background);
  box-sizing: border-box;
  z-index: 200; /* From zIndex.sticky */

  /* Inner delicate decorative border */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px;
    background-color: var(--color-brand-secondary);
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  text-decoration: none;
  margin-bottom: var(--space-10);
  border-bottom: 1px solid var(--color-border-base);
  padding-bottom: var(--space-6);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const LogoBadge = styled.div`
  width: 16rem;
  height: 16rem;
  background-color: var(--color-brand-background);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0.4rem;
  box-shadow: var(--shadow-sm);
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NavSection = styled.div`
  &:not(:last-child) {
    margin-bottom: var(--space-4);
  }
`;

const NavSectionTitle = styled.h3`
  font-family: var(--font-primary);
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  color: var(--color-white);
  text-transform: uppercase;
  margin-bottom: var(--space-4);
  margin-top: var(--space-8);
  font-weight: 600;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: 0;
  margin: 0;
`;

const ActiveDot = styled.span`
  width: 4px;
  height: 4px;
  background-color: var(--color-brand-accent);
  border-radius: var(--radius-full);
  position: absolute;
  left: -1.2rem;
  transition: opacity 0.2s ease;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 3.2rem;
  height: 1px;
  background-color: var(--color-brand-muted);
  width: 0;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const StyledNavLink = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) 0;
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: ${(props) => (props.$active ? "700" : "400")};
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-white);
  }

  svg {
    font-size: 2rem;
    color: var(--color-brand-secondary);
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }

  &:hover ${Underline} {
    width: calc(100% - 3.2rem);
  }
`;

const ProfileSection = styled.div`
  margin-top: auto;
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border-base);
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-sm);
  object-fit: cover;
  box-shadow: var(--shadow-sm);
`;

const StatusDot = styled.span`
  position: absolute;
  bottom: -0.2rem;
  right: -0.2rem;
  width: 1rem;
  height: 1rem;
  background-color: var(--color-brand-success);
  border: 2px solid var(--color-brand-background);
  border-radius: var(--radius-full);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const UserName = styled.span`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRole = styled.span`
  font-size: var(--text-xs);
  color: var(--color-brand-muted);
  text-transform: capitalize;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--space-3);
`;

const IconButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-base);
  color: var(--color-brand-foreground);
  background: transparent;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-bg-brand-subtle);
    border-color: var(--color-brand-secondary);
    color: var(--color-white);
    box-shadow: var(--shadow-sm);
  }

  svg {
    font-size: 1.8rem;
  }
`;

const Sidebar: FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // Use MutationObserver to detect class changes on document element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const logoSrc = !isDarkMode ? "/logo-light.png" : "/logo-dark.png";

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: TbLayoutDashboard },
    { label: "Bookings", path: "/bookings", icon: TbBookmark },
    { label: "Cabins", path: "/cabins", icon: TbMapPin },
    { label: "Users", path: "/users", icon: TbUsers },
  ];

  return (
    <StyledSidebar>
      <LogoContainer to="/dashboard" aria-label="Hotel Oasis Home">
        <LogoBadge>
          <LogoImg src={logoSrc} alt="Hotel Oasis Logo" />
        </LogoBadge>
      </LogoContainer>

      <Nav>
        <NavSection>
          <NavSectionTitle>Menu</NavSectionTitle>
          <NavList>
            {menuItems.map((item) => (
              <li key={item.path}>
                <StyledNavLink to={item.path} $active={isActive(item.path)}>
                  {isActive(item.path) && <ActiveDot aria-hidden="true" />}
                  <item.icon />
                  <span>{item.label}</span>
                  <Underline aria-hidden="true" />
                </StyledNavLink>
              </li>
            ))}
          </NavList>
        </NavSection>

        <NavSection>
          <NavSectionTitle>Preferences</NavSectionTitle>
          <NavList>
            <li>
              <StyledNavLink to="/settings" $active={isActive("/settings")}>
                {isActive("/settings") && <ActiveDot aria-hidden="true" />}
                <TbSettings />
                <span>Settings</span>
                <Underline aria-hidden="true" />
              </StyledNavLink>
            </li>
          </NavList>
        </NavSection>
      </Nav>

      <ProfileSection>
        <UserCard>
          <AvatarContainer>
            <Avatar src="/default-user.jpg" alt="Jonas Schmedt" />
            <StatusDot aria-label="Online" />
          </AvatarContainer>
          <UserInfo>
            <UserName title="Jonas Schmedt">Jonas Schmedt</UserName>
            <UserRole>Administrator</UserRole>
          </UserInfo>
        </UserCard>

        <ActionButtons>
          <IconButton
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Dark Mode"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            {isDarkMode ? <TbSun /> : <TbMoon />}
          </IconButton>
          <IconButton title="Settings" aria-label="User Settings">
            <TbSettings2 />
          </IconButton>
          <IconButton title="Logout" aria-label="Logout">
            <TbLogout />
          </IconButton>
        </ActionButtons>
      </ProfileSection>
    </StyledSidebar>
  );
};

export default Sidebar;
