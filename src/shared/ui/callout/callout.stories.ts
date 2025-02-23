import type { Meta, StoryObj } from "@storybook/react";

import { statusActions } from "@/data";
import { Callout } from "@/shared/ui";

const meta = {
  title: "Markdown/Blog/Callout",
  component: Callout,
  parameters: {
    docs: {
      description: {
        component:
          "The **Callout** component is a simple component that displays a message in a visually appealing way. It is often used to display a message or a status.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: {
        type: "select",
      },
      options: statusActions.map((action) => action.name),
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "The title of the callout",
    children:
      "The description provides key information that's appropriate for the severity of the alert.",
    variants: "info",
  },
};
