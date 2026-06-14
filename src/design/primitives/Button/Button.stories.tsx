import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component supporting multiple appearances, color schemes, sizes, rounded corners, and loading state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    appearance: {
      control: 'select',
      options: ['solid', 'ghost', 'outline', 'subtle', 'link'],
      description: 'Visual style of the button',
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info', 'dark', 'light', 'muted'],
      description: 'Color theme (maps to design tokens)',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius token',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      description: 'Size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a spinner and disables button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    // Margin props
    m: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Margin on all sides' },
    mt: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Margin top' },
    mr: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Margin right' },
    mb: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Margin bottom' },
    ml: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Margin left' },
    mx: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Margin horizontal (left & right)' },
    my: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Margin vertical (top & bottom)' },
    // Padding props
    p: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Padding on all sides' },
    pt: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Padding top' },
    pr: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Padding right' },
    pb: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Padding bottom' },
    pl: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Padding left' },
    px: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Padding horizontal (left & right)' },
    py: { control: 'select', options: [0,1,2,3,4,5,6], description: 'Padding vertical (top & bottom)' },
    // Transition props
    transitionDelay: {
      control: 'select',
      options: ['none', 'short', 'medium', 'long'],
      description: 'Transition delay',
    },
    transitionDuration: {
      control: 'select',
      options: ['fast', 'normal', 'slow'],
      description: 'Transition duration',
    },
    transitionTiming: {
      control: 'select',
      options: ['easeIn', 'easeOut', 'easeInOut', 'linear'],
      description: 'Transition timing function',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base solid button (default)
export const Solid: Story = {
  args: {
    children: 'Solid Button',
    appearance: 'solid',
    colorScheme: 'primary',
  },
};

// Appearance variants
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    appearance: 'ghost',
    colorScheme: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    appearance: 'outline',
    colorScheme: 'primary',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Subtle Button',
    appearance: 'subtle',
    colorScheme: 'primary',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    appearance: 'link',
    colorScheme: 'primary',
  },
};

// Additional useful variants
export const Loading: Story = {
  args: {
    children: 'Submit',
    appearance: 'solid',
    colorScheme: 'primary',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    appearance: 'solid',
    colorScheme: 'primary',
    disabled: true,
  },
};

export const RoundedFull: Story = {
  args: {
    children: 'Pill Button',
    appearance: 'solid',
    colorScheme: 'accent',
    rounded: 'full',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    appearance: 'solid',
    colorScheme: 'success',
    size: 'lg',
  },
};

// Playground – all props controllable
export const Playground: Story = {
  args: {
    children: 'Playground Button',
    appearance: 'solid',
    colorScheme: 'primary',
    rounded: 'md',
    size: 'base',
    loading: false,
    disabled: false,
    m: 1,
    p: 1,
    transitionDelay: 'none',
    transitionDuration: 'fast',
    transitionTiming: 'easeInOut',
  },
};