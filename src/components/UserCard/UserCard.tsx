/**
 * LAYER 5 — COMPOSED: UserCard · ProductCard
 *
 * Domain-specific cards built entirely from primitives.
 * Zero raw CSS — only composition.
 */

import React from 'react';
import styled from 'styled-components';

import { Box, Flex, Stack, Text, Heading, Button, Badge, Divider } from '../../design/primitives';
import type { StandardColorScheme } from '../../design/shared/capabilities';

// ─────────────────────────────────────────────────────────────────────────────
// AVATAR (shared sub-primitive — used internally by UserCard)
// ─────────────────────────────────────────────────────────────────────────────

const AvatarCircle = styled.div<{ $size: number; $bg: string; $color: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: var(--radius-full);
  background-color: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => Math.round($size * 0.36)}px;
  font-weight: 600;
  font-family: var(--font-secondary);
  flex-shrink: 0;
  user-select: none;
`;

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

// ─────────────────────────────────────────────────────────────────────────────
// USER CARD
// ─────────────────────────────────────────────────────────────────────────────

export interface UserCardBadge {
  label: string;
  colorScheme?: StandardColorScheme;
}

export interface UserCardAction {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export interface UserCardProps {
  name: string;
  role?: string;
  email?: string;
  status?: 'online' | 'away' | 'offline';
  badges?: UserCardBadge[];
  primaryAction?: UserCardAction;
  secondaryAction?: UserCardAction;
  avatarUrl?: string;
  className?: string;
}

const statusColorMap: Record<NonNullable<UserCardProps['status']>, StandardColorScheme> = {
  online:  'success',
  away:    'warning',
  offline: 'info',
};

const statusLabelMap: Record<NonNullable<UserCardProps['status']>, string> = {
  online:  'Online',
  away:    'Away',
  offline: 'Offline',
};

export const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  email,
  status,
  badges = [],
  primaryAction,
  secondaryAction,
  avatarUrl,
  className,
}) => (
  <Box
    bg="var(--color-brand-background)"
    rounded="lg"
    shadow="sm"
    style={{ border: '1px solid var(--color-border-base)' }}
    className={className}
  >
    <Box p={5}>
      <Flex gap={3} align="flex-start">
        {/* Avatar */}
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            style={{
              width: 48,
              height: 48,
              borderRadius: 'var(--radius-full)',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        ) : (
          <AvatarCircle
            $size={48}
            $bg="var(--color-bg-brand-subtle)"
            $color="var(--color-brand-primary)"
            aria-label={`Avatar for ${name}`}
          >
            {getInitials(name)}
          </AvatarCircle>
        )}

        {/* Details */}
        <Stack axis="y" spacing={1} style={{ flex: 1, minWidth: 0 }}>
          <Heading as="h4" size="h5" isTruncated style={{ marginBottom: 0 }}>
            {name}
          </Heading>

          {role && (
            <Text as="span" size="sm" color="secondary" isTruncated>
              {role}
            </Text>
          )}

          {email && (
            <Text as="span" size="xs" color="secondary" isTruncated>
              {email}
            </Text>
          )}

          {/* Badges row */}
          {(badges.length > 0 || status) && (
            <Flex gap={2} wrap="wrap" style={{ marginTop: '0.4rem' }}>
              {status && (
                <Badge colorScheme={statusColorMap[status]} size="sm">
                  {statusLabelMap[status]}
                </Badge>
              )}
              {badges.map((badge) => (
                <Badge key={badge.label} colorScheme={badge.colorScheme ?? 'primary'} size="sm">
                  {badge.label}
                </Badge>
              ))}
            </Flex>
          )}
        </Stack>
      </Flex>
    </Box>

    {/* Actions footer */}
    {(primaryAction || secondaryAction) && (
      <>
        <Divider />
        <Box px={5} py={3}>
          <Flex gap={2}>
            {secondaryAction && (
              <Button
                appearance="outline"
                colorScheme="primary"
                size="sm"
                onClick={secondaryAction.onClick}
                isFullWidth
              >
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button
                appearance="solid"
                colorScheme="primary"
                size="sm"
                onClick={primaryAction.onClick}
                isFullWidth
              >
                {primaryAction.label}
              </Button>
            )}
          </Flex>
        </Box>
      </>
    )}
  </Box>
);

UserCard.displayName = 'UserCard';

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT CARD (Cabin Card for Wild Oasis)
// ─────────────────────────────────────────────────────────────────────────────

export interface ProductCardProps {
  name: string;
  description?: string;
  price: number;
  currency?: string;
  priceUnit?: string;
  status?: 'available' | 'unavailable' | 'limited';
  capacity?: number;
  imageUrl?: string;
  onBook?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

const statusSchemeMap: Record<NonNullable<ProductCardProps['status']>, StandardColorScheme> = {
  available:   'success',
  unavailable: 'danger',
  limited:     'warning',
};

const statusLabelMap2: Record<NonNullable<ProductCardProps['status']>, string> = {
  available:   'Available',
  unavailable: 'Booked out',
  limited:     'Limited',
};

const ProductImagePlaceholder = styled.div`
  height: 15rem;
  background: linear-gradient(
    135deg,
    var(--color-bg-brand-subtle) 0%,
    oklch(0.85 0.08 85 / 0.15) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-brand-muted);
  font-size: var(--text-4xl);
`;

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  currency = '€',
  priceUnit = 'night',
  status = 'available',
  capacity,
  imageUrl,
  onBook,
  onViewDetails,
  className,
}) => (
  <Box
    bg="var(--color-brand-background)"
    rounded="lg"
    shadow="sm"
    style={{ border: '1px solid var(--color-border-base)', overflow: 'hidden' }}
    className={className}
  >
    {/* Image */}
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={name}
        style={{ width: '100%', height: '15rem', objectFit: 'cover', display: 'block' }}
      />
    ) : (
      <ProductImagePlaceholder aria-hidden>🌲</ProductImagePlaceholder>
    )}

    {/* Body */}
    <Box p={5}>
      <Stack axis="y" spacing={3}>
        {/* Header row */}
        <Flex align="flex-start" justify="space-between" gap={2}>
          <Stack axis="y" spacing={1} style={{ flex: 1, minWidth: 0 }}>
            <Heading as="h3" size="h5" isTruncated style={{ marginBottom: 0 }}>
              {name}
            </Heading>
            {description && (
              <Text size="sm" color="secondary" leading="snug">
                {description}
              </Text>
            )}
          </Stack>

          {status && (
            <Badge colorScheme={statusSchemeMap[status]} size="sm" style={{ flexShrink: 0 }}>
              {statusLabelMap2[status]}
            </Badge>
          )}
        </Flex>

        {/* Meta */}
        {capacity && (
          <Text as="span" size="xs" color="secondary">
            Sleeps {capacity}
          </Text>
        )}

        <Divider spacing={0} />

        {/* Footer */}
        <Flex align="center" justify="space-between">
          <Stack axis="y" spacing={0}>
            <Text as="span" size="xl" weight="bold" color="primary">
              {currency}{price.toLocaleString()}
            </Text>
            <Text as="span" size="xs" color="secondary">
              per {priceUnit}
            </Text>
          </Stack>

          <Flex gap={2}>
            {onViewDetails && (
              <Button appearance="ghost" colorScheme="primary" size="sm" onClick={onViewDetails}>
                Details
              </Button>
            )}
            {onBook && (
              <Button
                appearance="solid"
                colorScheme="primary"
                size="sm"
                onClick={onBook}
                isDisabled={status === 'unavailable'}
              >
                Book now
              </Button>
            )}
          </Flex>
        </Flex>
      </Stack>
    </Box>
  </Box>
);

ProductCard.displayName = 'ProductCard';
