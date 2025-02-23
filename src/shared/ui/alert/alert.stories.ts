import type { Meta, StoryObj } from "@storybook/react";

import { statusActions } from "@/data";
import { Alert } from "@/shared/ui";

const meta = {
  title: "Shared/Popups/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "The **Alert** component is use to display **important information** after the user do any actions on the page. Remember that it's not accessible for the markdown files and if you want to use it, you should make it **programmatically**.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: statusActions.map((action) => action.name),
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "info",
    close: () => {},
    content:
      "This message was sent successfully and will be delivered shortly.",
  },
};
