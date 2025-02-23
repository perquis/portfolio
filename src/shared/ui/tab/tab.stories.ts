import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from "@/shared/ui";

const meta = {
  title: "Shared/Menu/Tab",
  component: Tab,
  parameters: {
    docs: {
      description: {
        component:
          "The **Tab** component is a simple component that displays a tab with a link to a specific page.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Tab",
    href: "/",
  },
};
