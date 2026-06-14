import type { Preview } from "@storybook/react-vite";
import GlobalStyles from "../src/design/GlobalStyles";
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

const preview: Preview = {
  parameters: {},
};

export default preview;
