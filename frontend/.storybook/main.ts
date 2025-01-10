import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.css = {
      ...config.css,
      postcss: path.resolve(__dirname, '../postcss.config.js'), // Add PostCSS configuration
    };
    
    // Add alias for react-icons
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        'react-icons': path.resolve(__dirname, '../node_modules/react-icons'),
      },
    };

    return config;
  },
};
export default config;
