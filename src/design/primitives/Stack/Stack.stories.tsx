import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Primitives/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Layout props
    spacing: {
      control: { type: "select" },
      options: [0, 1, 2, 3, 4, 5, 6],
      description: "Gap between children (uses spacing tokens)",
    },
    align: {
      control: { type: "select" },
      options: ["flex-start", "center", "flex-end", "stretch"],
      description: "Cross-axis alignment (horizontal)",
    },
    justify: {
      control: { type: "select" },
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      description: "Main-axis justification (vertical)",
    },

    // As prop
    as: {
      control: { type: "select" },
      options: ["div", "section", "article", "header", "footer", "main"],
      description: "Element to render as",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    spacing: 2,
    align: "stretch",
    justify: "flex-start",
    as: "div",
  },
};

export const Playground: Story = {
  args: {
    spacing: 2,
    align: "stretch",
    justify: "flex-start",
    as: "div",
  },
};
