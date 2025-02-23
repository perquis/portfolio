import type { Meta, StoryObj } from "@storybook/react";

import { Feedback } from "@/shared/ui";

const meta = {
  title: "Shared/Actions/Feedback",
  component: Feedback,
  parameters: {
    docs: {
      description: {
        component:
          "The **Feedback** component is a simple component that displays a feedback section with emojis.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Feedback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "You can estimate this article",
    description: "How was your experience?",
    close: () => {},
  },
};
