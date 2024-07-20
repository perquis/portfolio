import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "@/shared/ui";

const meta = {
  title: "Controls/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    docs: {
      description: {
        component:
          "The **SegmentedControl** component is a simple component that displays a set of controls in a visually appealing way. It is often used to display a set of options.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    controls: [
      {
        icon: "Next",
        name: "next.config.mjs",
      },
      {
        icon: "Tsx",
        name: "page.tsx",
      },
      {
        icon: "Py",
        name: "app.py",
      },
    ],
  },
};