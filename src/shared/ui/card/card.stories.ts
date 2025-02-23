import type { Meta, StoryObj } from "@storybook/react";

import { placeholders } from "@/data";
import { Card } from "@/shared/ui";

const meta = {
  title: "Markdown/Blog/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "The **Card** component is a simple component that displays a piece of information in a visually appealing way. It is often used to display a title, a description, and an image.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description:
      "This is a description of the card. It can be used to provide more information about the card.",
    light_img: placeholders.images,
    dark_img: placeholders.images,
    publishedAt: new Date(),
    slug: "card-slug",
    tags: ["tag1", "tag2"],
    year: 2021,
  },
};
