import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from ".";
import type { InputProps } from "./input.types";

const appearanceOptions: NonNullable<InputProps["appearance"]>[] = [
  "solid",
  "ghost",
  "outline",
  "subtle",
  "link",
];

const colorSchemeOptions: NonNullable<InputProps["colorScheme"]>[] = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "error",
  "info",
  "muted",
];

const roundedOptions: NonNullable<InputProps["rounded"]>[] = [
  "none",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
];

const sizeOptions: NonNullable<InputProps["size"]>[] = ["xs", "sm", "base", "lg", "xl"];

const transitionDelayOptions: NonNullable<
  InputProps["transitionDelay"]
>[] = ["none", "short", "medium", "long"];

const transitionDurationOptions: NonNullable<
  InputProps["transitionDuration"]
>[] = ["fast", "normal", "slow"];

const transitionTimingOptions: NonNullable<
  InputProps["transitionTiming"]
>[] = [
  "ease",
  "easeIn",
  "easeOut",
  "easeInOut",
  "linear",
  "smooth",
];

const meta = {
  title: "Design/Primitives/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      sort: "requiredFirst",
    },
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearanceOptions,
    },
    colorScheme: {
      control: "select",
      options: colorSchemeOptions,
    },
    rounded: {
      control: "select",
      options: roundedOptions,
    },
    size: {
      control: "select",
      options: sizeOptions,
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    transitionDelay: {
      control: "select",
      options: transitionDelayOptions,
    },
    transitionDuration: {
      control: "select",
      options: transitionDurationOptions,
    },
    transitionTiming: {
      control: "select",
      options: transitionTimingOptions,
    },
    placeholder: {
      control: "text",
    },
  },
  args: {
    placeholder: "Type here...",
    appearance: "outline",
    colorScheme: "primary",
    rounded: "md",
    size: "base",
    loading: false,
    disabled: false,
    error: false,
    transitionDelay: "none",
    transitionDuration: "fast",
    transitionTiming: "easeInOut",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    appearance: "subtle",
    transitionDuration: "slow"
  }
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, width: 360 }}>
      <Input {...args} colorScheme="primary" appearance="solid"  />
      <Input {...args} colorScheme="primary" appearance="subtle"  />
      <Input {...args} colorScheme="primary" appearance="ghost"  />
      <Input {...args} colorScheme="primary" appearance="outline"  />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, width: 360 }}>
      {sizeOptions.map((size) => (
        <Input key={size} {...args} size={size} placeholder={size} />
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, width: 360 }}>
      {roundedOptions.map((rounded) => (
        <Input
          key={rounded}
          {...args}
          rounded={rounded}
          placeholder={rounded}
        />
      ))}
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, width: 360 }}>
      {colorSchemeOptions.map((colorScheme) => (
        <Input
          key={colorScheme}
          {...args}
          colorScheme={colorScheme}
          placeholder={String(colorScheme)}
        />
      ))}
    </div>
  ),
};


export const Loading: Story = {
  args: {
    loading: true,
    disabled: false,
    placeholder: "Loading...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: "Has error",
  },
};

