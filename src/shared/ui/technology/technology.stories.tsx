import type { Meta, StoryObj } from "@storybook/react";

import * as stacks from "@/shared/icons/programming-languages";
import { Section, Technology } from "@/shared/ui";

const meta = {
  title: "Markdown/List/Technology",
  component: Technology,
  parameters: {
    docs: {
      description: {
        component:
          "The **Technology** component is a simple component that displays a technology icon.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(stacks),
    },
  },
} satisfies Meta<typeof Technology>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "Jsx",
    name: "React",
    content: "A JavaScript library for building user interfaces.",
  },
};

// @ts-ignore
export const List: Story = {
  decorators: [
    () => (
      <Section className="!flex-row gap-5">
        <Technology
          icon="Jsx"
          name="React"
          content="A JavaScript library for building user interfaces."
        />
        <Technology
          icon="Vue"
          name="Vue"
          content="The Progressive JavaScript Framework."
        />
      </Section>
    ),
  ],
};
