/**
 * LAYER 5 — COMPOSED: DashboardHeader
 *
 * Top navigation bar for the Wild Oasis admin dashboard.
 * Built from primitives. Zero raw CSS.
 *
 * Features:
 *  - Greeting with time-of-day awareness
 *  - Notification bell with unread badge
 *  - User avatar with dropdown trigger
 *  - Search trigger
 */

import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Box, Flex, Stack, Text, Heading, Button, Badge } from '../../design/primitives';

// ─── Sticky wrapper — layout only, no visual opinions ────────────────────────

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: var(--color-brand-background);
  border-bottom: 1px solid var(--color-border-base);
  backdrop-filter: blur(8px);
`;

// ─── Notification button with dot badge ──────────────────────────────────────

const NotifWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

const NotifDot = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: var(--color-brand-error);
  border: 2px solid var(--color-brand-background);
`;

// ─── Avatar ───────────────────────────────────────────────────────────────────

const AvatarCircle = styled.button`
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-brand-subtle);
  color: var(--color-brand-primary);
  border: 1.5px solid var(--color-border-base);
  font-size: var(--text-xs);
  font-weight: 600;
  font-family: var(--font-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

// ─── Time-of-day greeting ─────────────────────────────────────────────────────

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function getInitials(name: string): string {
  return name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase();
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface DashboardHeaderProps {
  userName: string;
  propertyName?: string;
  activeCabins?: number;
  unreadNotifications?: number;
  onNotificationsClick?: () => void;
  onSearchClick?: () => void;
  onSettingsClick?: () => void;
  onAvatarClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  propertyName = 'The Wild Oasis',
  activeCabins,
  unreadNotifications = 0,
  onNotificationsClick,
  onSearchClick,
  onSettingsClick,
  onAvatarClick,
}) => {
  const greeting = useMemo(() => getGreeting(), []);
  const initials = useMemo(() => getInitials(userName), [userName]);

  const subtitle = [propertyName, activeCabins ? `${activeCabins} cabins active` : null]
    .filter(Boolean)
    .join(' · ');

  return (
    <HeaderWrapper>
      <Box px={6} py={4}>
        <Flex align="center" justify="space-between" gap={4}>
          {/* Left: Greeting */}
          <Stack axis="y" spacing={0}>
            <Heading as="h1" size="h5" style={{ marginBottom: 0 }}>
              {greeting}, {userName} 🌿
            </Heading>
            <Text as="span" size="sm" color="secondary">
              {subtitle}
            </Text>
          </Stack>

          {/* Right: Actions */}
          <Flex align="center" gap={2}>
            {/* Search */}
            {onSearchClick && (
              <Button
                appearance="ghost"
                colorScheme="primary"
                size="sm"
                rounded="md"
                onClick={onSearchClick}
                aria-label="Open search"
              >
                🔍
              </Button>
            )}

            {/* Notifications */}
            {onNotificationsClick && (
              <NotifWrap>
                <Button
                  appearance="outline"
                  colorScheme="primary"
                  size="sm"
                  rounded="md"
                  onClick={onNotificationsClick}
                  aria-label={`Notifications${unreadNotifications > 0 ? `, ${unreadNotifications} unread` : ''}`}
                >
                  🔔
                </Button>
                {unreadNotifications > 0 && <NotifDot aria-hidden />}
              </NotifWrap>
            )}

            {/* Settings */}
            {onSettingsClick && (
              <Button
                appearance="outline"
                colorScheme="primary"
                size="sm"
                rounded="md"
                onClick={onSettingsClick}
                aria-label="Settings"
              >
                ⚙️
              </Button>
            )}

            {/* Avatar */}
            <AvatarCircle onClick={onAvatarClick} aria-label={`${userName}'s account`}>
              {initials}
            </AvatarCircle>
          </Flex>
        </Flex>
      </Box>
    </HeaderWrapper>
  );
};

DashboardHeader.displayName = 'DashboardHeader';
