import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";
import type { HeadingProps } from "./Heading";

const levelOptions = [1, 2, 3, 4, 5, 6];
const textColorOptions = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "error",
  "info",
  "background",
  "foreground",
  "dark",
  "light",
  "muted",
];
const textAlignOptions = ["left", "center", "right", "justify"];
const fontFamilyOptions = ["base", "primary", "secondary", "mono"];
const spacingOptions = [1, 2, 3, 4, 5, 6, 8, 10, 12];

const meta = {
  title: "Design/Primitives/Heading",
  component: Heading,
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
          "Heading renders semantic h1-h6 elements with design-token controls for color, alignment, font family, margin, and padding.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Heading content.",
    },
    level: {
      control: "select",
      options: levelOptions,
      description: "Semantic heading level.",
    },
    textColor: {
      control: "select",
      options: textColorOptions,
      description: "Brand text color token.",
    },
    textAlign: {
      control: "select",
      options: textAlignOptions,
      description: "Text alignment.",
    },
    fontFamily: {
      control: "select",
      options: fontFamilyOptions,
      description: "Font family token.",
    },
    m: {
      control: "select",
      options: spacingOptions,
      description: "Margin on all sides.",
    },
    mt: {
      control: "select",
      options: spacingOptions,
      description: "Margin top.",
    },
    mr: {
      control: "select",
      options: spacingOptions,
      description: "Margin right.",
    },
    mb: {
      control: "select",
      options: spacingOptions,
      description: "Margin bottom.",
    },
    ml: {
      control: "select",
      options: spacingOptions,
      description: "Margin left.",
    },
    mx: {
      control: "select",
      options: spacingOptions,
      description: "Horizontal margin.",
    },
    my: {
      control: "select",
      options: spacingOptions,
      description: "Vertical margin.",
    },
    p: {
      control: "select",
      options: spacingOptions,
      description: "Padding on all sides.",
    },
    pt: {
      control: "select",
      options: spacingOptions,
      description: "Padding top.",
    },
    pr: {
      control: "select",
      options: spacingOptions,
      description: "Padding right.",
    },
    pb: {
      control: "select",
      options: spacingOptions,
      description: "Padding bottom.",
    },
    pl: {
      control: "select",
      options: spacingOptions,
      description: "Padding left.",
    },
    px: {
      control: "select",
      options: spacingOptions,
      description: "Horizontal padding.",
    },
    py: {
      control: "select",
      options: spacingOptions,
      description: "Vertical padding.",
    },
  },
  args: {
    children: "Welcome to Oasis",
    level: 1,
    textColor: "foreground",
    textAlign: "left",
    fontFamily: "base",
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<HeadingProps>;

export const Default: Story = {};

export const Level1: Story = {
  args: {
    children: "Heading Level 1",
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    children: "Heading Level 2",
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    children: "Heading Level 3",
    level: 3,
  },
};

export const Level4: Story = {
  args: {
    children: "Heading Level 4",
    level: 4,
  },
};

export const Level5: Story = {
  args: {
    children: "Heading Level 5",
    level: 5,
  },
};

export const Level6: Story = {
  args: {
    children: "Heading Level 6",
    level: 6,
  },
};

export const PrimaryColor: Story = {
  args: {
    children: "Primary Heading",
    level: 2,
    textColor: "primary",
  },
};

export const Centered: Story = {
  args: {
    children: "Centered Heading",
    level: 2,
    textAlign: "center",
  },
};

export const BrandFont: Story = {
  args: {
    children: "Brand Font Heading",
    level: 2,
    fontFamily: "primary",
  },
};

export const WithSpacing: Story = {
  args: {
    children: "Heading With Spacing",
    level: 3,
    mb: 4,
    px: 5,
    py: 3,
  },
};

export const Playground: Story = {
  args: {
    children: "Playground Heading",
    level: 2,
    textColor: "primary",
    textAlign: "center",
    fontFamily: "base",
    m: 2,
    p: 3,
  },
};
