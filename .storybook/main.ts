import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config: any) => {
    // Find the rule that handles CSS files
    const cssRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.toString().includes('css')
    );

    if (cssRule) {
      cssRule.use.forEach((useEntry: any) => {
        if (typeof useEntry === 'object' && useEntry.loader.includes('css-loader')) {
          useEntry.options = {
            ...useEntry.options,
            url: true,
            import: true,
          };
        }
      });
    }

    return config;
  },
  staticDirs: ["..\\public"],
};
export default config;
