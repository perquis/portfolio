import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@/shared/ui";

const meta = {
  title: "Shared/Menu/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component:
          "The **Footer** component is a simple component that displays a logo and a copyright notice.",
      },
    },
  },
  tags: ["layout"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
