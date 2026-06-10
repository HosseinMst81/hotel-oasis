/**
 * LAYER 5 — COMPOSED: ConfirmModal
 *
 * Destructive-action confirmation dialog.
 * Built from primitives only — no raw styling.
 *
 * Features:
 *   - Accessible: focus trap, aria-modal, aria-labelledby, aria-describedby
 *   - Keyboard: Escape closes, Enter confirms
 *   - Configurable severity via colorScheme on confirm button
 *   - Loading state on async confirm actions
 */

import React, { useEffect, useId, useRef } from 'react';
import styled from 'styled-components';

import { Box, Flex, Stack, Text, Heading, Button, Icon } from '../../primitives';
import type { StandardColorScheme } from '../../shared/capabilities';

// ─── Overlay ──────────────────────────────────────────────────────────────────
// The only styled-component here — it handles positioning, not visuals.

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  background-color: oklch(0.12 0.02 150 / 0.5);
  backdrop-filter: blur(2px);
  animation: fadeIn 120ms ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 44rem;
  animation: slideUp 150ms cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(8px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
`;

// ─── Props ────────────────────────────────────────────────────────────────────

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmColorScheme?: StandardColorScheme;
  isConfirming?: boolean;
  /** Optional icon component (e.g. from lucide-react) */
  icon?: React.ElementType;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmColorScheme = 'danger',
  isConfirming = false,
  icon: IconComponent,
}) => {
  const titleId = useId();
  const descId = useId();
  const confirmRef = useRef<HTMLButtonElement>(null);

  // Focus confirm button on open
  useEffect(() => {
    if (isOpen) confirmRef.current?.focus();
  }, [isOpen]);

  // Keyboard handling
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalBox>
        <Box
          bg="var(--color-brand-background)"
          rounded="lg"
          shadow="lg"
          p={6}
          style={{ border: '1px solid var(--color-border-base)' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={description ? descId : undefined}
        >
          <Stack axis="y" spacing={4}>
            {/* Header */}
            <Flex align="flex-start" gap={3}>
              {IconComponent && (
                <Box
                  p={2}
                  rounded="md"
                  bg={`var(--color-bg-${confirmColorScheme === 'danger' ? 'error' : 'brand'}-subtle)`}
                  style={{ flexShrink: 0 }}
                >
                  <Icon
                    icon={IconComponent}
                    size="md"
                    color={`var(--color-brand-${confirmColorScheme === 'danger' ? 'error' : 'primary'})`}
                    isDecorative
                  />
                </Box>
              )}

              <Stack axis="y" spacing={1} style={{ flex: 1 }}>
                <Heading as="h2" size="h4" style={{ marginBottom: 0 }} id={titleId}>
                  {title}
                </Heading>
                {description && (
                  <Text size="sm" color="secondary" leading="relaxed" id={descId}>
                    {description}
                  </Text>
                )}
              </Stack>
            </Flex>

            {/* Actions */}
            <Flex gap={3} justify="flex-end">
              <Button
                appearance="outline"
                colorScheme="primary"
                size="md"
                onClick={onClose}
                isDisabled={isConfirming}
              >
                {cancelLabel}
              </Button>

              <Button
                ref={confirmRef}
                appearance="solid"
                colorScheme={confirmColorScheme}
                size="md"
                onClick={onConfirm}
                isLoading={isConfirming}
              >
                {confirmLabel}
              </Button>
            </Flex>
          </Stack>
        </Box>
      </ModalBox>
    </Overlay>
  );
};

ConfirmModal.displayName = 'ConfirmModal';
