import type { Meta, StoryObj } from '@storybook/react-vite';
import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Primitives/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
    },
    colorScheme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    size: 'md',
    speed: 'normal',
    colorScheme: 'primary',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    colorScheme: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    colorScheme: 'secondary',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    colorScheme: 'success',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    colorScheme: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    colorScheme: 'error',
  },
};

export const Playground: Story = {
  args: {
    size: 'md',
    speed: 'normal',
    colorScheme: 'primary',
  },
};
