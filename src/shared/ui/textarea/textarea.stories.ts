import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@/shared/ui";

const meta = {
  title: "Shared/Form/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "The **Textarea** component is used to get multi-line text input from the user.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Enter your message",
    defaultValue: "Jo",
    error: "This message is too short.",
  },
};

export const LabeledField: Story = {
  args: {
    placeholder: "Enter your message",
    name: "Message",
  },
};
