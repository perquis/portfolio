import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/shared/ui";

const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "The **Input** component is a simple component that allows users to input text. It is often used in forms and search fields.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["text", "password", "email", "number", "tel", "url"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Name",
  },
};
