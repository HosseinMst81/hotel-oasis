import type { Meta, StoryObj } from '@storybook/react-vite';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content',
    },
    fontSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Font size from typography tokens',
    },
    fontWeight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      description: 'Font weight',
    },
    lineHeight: {
      control: 'select',
      options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      description: 'Line height',
    },
    letterSpacing: {
      control: 'select',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      description: 'Letter spacing',
    },
    fontFamily: {
      control: 'select',
      options: ['base', 'heading', 'mono'],
      description: 'Font family variant',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    textColor: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info', 'foreground', 'background', 'muted', 'dark', 'light'],
      description: 'Text color from brand palette',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Force width 100%',
    },
    m: { control: 'select', options: [0,1,2,3,4,5,6] },
    mt: { control: 'select', options: [0,1,2,3,4,5,6] },
    mr: { control: 'select', options: [0,1,2,3,4,5,6] },
    mb: { control: 'select', options: [0,1,2,3,4,5,6] },
    ml: { control: 'select', options: [0,1,2,3,4,5,6] },
    mx: { control: 'select', options: [0,1,2,3,4,5,6] },
    my: { control: 'select', options: [0,1,2,3,4,5,6] },
    p: { control: 'select', options: [0,1,2,3,4,5,6] },
    pt: { control: 'select', options: [0,1,2,3,4,5,6] },
    pr: { control: 'select', options: [0,1,2,3,4,5,6] },
    pb: { control: 'select', options: [0,1,2,3,4,5,6] },
    pl: { control: 'select', options: [0,1,2,3,4,5,6] },
    px: { control: 'select', options: [0,1,2,3,4,5,6] },
    py: { control: 'select', options: [0,1,2,3,4,5,6] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Small: Story = {
  args: {
    children: 'Small text for captions and footnotes.',
    fontSize: 'sm',
  },
};

export const LargeHeadingStyle: Story = {
  args: {
    children: 'Large, bold text used as a pseudo-heading.',
    fontSize: '2xl',
    fontWeight: 'bold',
  },
};

export const CenteredMuted: Story = {
  args: {
    children: 'Centered muted text for secondary information.',
    textAlign: 'center',
    textColor: 'muted',
  },
};

export const WithLetterSpacing: Story = {
  args: {
    children: 'UPPERCASE WITH WIDE LETTER SPACING',
    letterSpacing: 'wider',
    fontWeight: 'semibold',
  },
};

export const Playground: Story = {
  args: {
    children: 'Customize me using the controls!',
    fontSize: 'md',
    fontWeight: 'medium',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    fontFamily: 'base',
    textAlign: 'left',
    textColor: 'foreground',
    fullWidth: false,
  },
};