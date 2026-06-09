/**
 * LAYER 5 — COMPOSED COMPONENTS
 * Barrel export for all composed components.
 *
 * Usage: import { EmptyState, ConfirmModal, UserCard, ProductCard, DashboardHeader } from '@/components'
 */


export { ConfirmModal } from './ConfirmModal/ConfirmModal';
export type { ConfirmModalProps } from './ConfirmModal/ConfirmModal';

export { UserCard } from './UserCard/UserCard';
export type { UserCardProps, UserCardBadge, UserCardAction } from './UserCard/UserCard';

export { ProductCard } from './UserCard/UserCard';
export type { ProductCardProps } from './UserCard/UserCard';

export { DashboardHeader } from './DashboardHeader/DashboardHeader';
export type { DashboardHeaderProps } from './DashboardHeader/DashboardHeader';
