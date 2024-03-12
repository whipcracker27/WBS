import type { Preview } from "@storybook/react";
import { withPerformance } from 'storybook-addon-performance';

import '../src/App.css';

export const decorators = [withPerformance];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
