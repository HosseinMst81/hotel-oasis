import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from ".";
import type { BadgeProps } from ".";
import Inline from "../Inline/Inline";

const appearanceOptions = ["solid", "ghost", "outline", "subtle", "link"];
const colorSchemeOptions = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "error",
  "info",
  "dark",
  "light",
  "muted",
];
const roundedOptions = ["none", "sm", "md", "lg", "xl", "full"];
const sizeOptions = ["xs", "sm", "base", "lg", "xl"];
const spacingOptions = [1, 2, 3, 4, 5, 6, 8, 10, 12];
const transitionDelayOptions = ["none", "short", "medium", "long"];
const transitionDurationOptions = ["fast", "normal", "slow"];
const transitionTimingOptions = [
  "ease",
  "easeIn",
  "easeOut",
  "easeInOut",
  "linear",
  "smooth",
];

const meta = {
  title: "Design/Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      sort: "requiredFirst",
    },
    docs: {
      description: {
        component:
          "Badge is an inline status primitive composed from shared size, radius, appearance, color, spacing, and transition maps.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Badge content.",
    },
    appearance: {
      control: "select",
      options: appearanceOptions,
      description: "Visual appearance token.",
    },
    colorScheme: {
      control: "select",
      options: colorSchemeOptions,
      description: "Semantic color scheme token.",
    },
    rounded: {
      control: "select",
      options: roundedOptions,
      description: "Border radius token.",
    },
    size: {
      control: "select",
      options: sizeOptions,
      description: "Size token.",
    },
    loading: {
      control: "boolean",
      description: "Shows the shared Loading primitive.",
    },
    disabled: {
      control: "boolean",
      description: "Marks the badge as disabled with aria-disabled.",
    },
    m: { control: "select", options: spacingOptions },
    mt: { control: "select", options: spacingOptions },
    mr: { control: "select", options: spacingOptions },
    mb: { control: "select", options: spacingOptions },
    ml: { control: "select", options: spacingOptions },
    mx: { control: "select", options: spacingOptions },
    my: { control: "select", options: spacingOptions },
    p: { control: "select", options: spacingOptions },
    pt: { control: "select", options: spacingOptions },
    pr: { control: "select", options: spacingOptions },
    pb: { control: "select", options: spacingOptions },
    pl: { control: "select", options: spacingOptions },
    px: { control: "select", options: spacingOptions },
    py: { control: "select", options: spacingOptions },
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
  },
  args: {
    children: "Confirmed",
    appearance: "subtle",
    colorScheme: "success",
    rounded: "full",
    size: "sm",
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Inline spacing={3} align="center" justify="center">
      {sizeOptions.map((size) => (
        <Badge key={size} size={size as BadgeProps["size"]}>
          {size}
        </Badge>
      ))}
    </Inline>
  ),
};

export const Appearances: Story = {
  render: () => (
    <Inline spacing={3} align="center" justify="center">
      {appearanceOptions.map((appearance) => (
        <Badge
          key={appearance}
          appearance={appearance as BadgeProps["appearance"]}
          colorScheme="primary"
        >
          {appearance}
        </Badge>
      ))}
    </Inline>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <Inline spacing={3} align="center" justify="center" wrap="wrap">
      {colorSchemeOptions.map((colorScheme) => (
        <Badge
          key={colorScheme}
          colorScheme={colorScheme as BadgeProps["colorScheme"]}
        >
          {colorScheme}
        </Badge>
      ))}
    </Inline>
  ),
};

export const Rounded: Story = {
  render: () => (
    <Inline spacing={3} align="center" justify="center">
      {roundedOptions.map((rounded) => (
        <Badge key={rounded} rounded={rounded as BadgeProps["rounded"]}>
          {rounded}
        </Badge>
      ))}
    </Inline>
  ),
};

export const Loading: Story = {
  args: {
    children: "Syncing",
    loading: true,
    appearance: "outline",
    colorScheme: "info",
  },
};

export const Disabled: Story = {
  args: {
    children: "Archived",
    disabled: true,
    appearance: "solid",
    colorScheme: "muted",
  },
};

export const Playground: Story = {
  args: {
    children: "Playground",
    appearance: "subtle",
    colorScheme: "primary",
    rounded: "full",
    size: "sm",
    loading: false,
    disabled: false,
    transitionDelay: "none",
    transitionDuration: "fast",
    transitionTiming: "easeInOut",
  },
};
