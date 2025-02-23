import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/ui";

const meta = {
  title: "Shared/Actions/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "The **Button** component has **a lot of variants** which you can use if you need it. You can use it for **call to action** or **submitting forms**. It's **fully customizable** and **easy to use**.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    variants: {
      control: {
        type: "select",
      },
      options: ["black", "white", "indigo"],
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The **Button** component is a primary button that users can click to perform an action.",
      },
    },
  },
  args: {
    size: "medium",
    variants: "black",
    children: "Click me",
    loading: false,
    disabled: false,
    mode: "simple",
  },
};

export const Gradient: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The **Button** component is a primary button that users can click to perform an action however in our web app is not used.",
      },
    },
  },
  args: {
    size: "medium",
    variants: "black",
    children: "Click me",
    loading: false,
    disabled: false,
    mode: "gradient",
  },
};
