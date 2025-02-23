import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "@/shared/ui";

const meta = {
  title: "Markdown/Actions/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "The **Accordion** component is used to **display important information** about provided question. If the user is interested at, he will click on this component to see more details. So, if you want to **hide some information** and show it only when user is interested, you can use this component 😉.",
      },
    },
  },
  tags: ["autodocs", "mdx"],
  argTypes: {
    question: {
      control: {
        type: "text",
      },
    },
    answer: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    question:
      "What technologies and tools do you use most frequently in your projects?",
    answer:
      "I primarily use HTML, CSS/SCSS, and TypeScript for building user interfaces. Additionally, I work with frameworks like Angular and React. On the backend, I utilize Node.js and Express.",
  },
};
