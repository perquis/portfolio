import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "@/shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Markdown/Text/Title",
  component: Title,
  parameters: {
    docs: {
      description: {
        component:
          "The **Title** component has very much impact on **SEO** and **accessibility**. It's used to define the title of a page or a section. It's used it in combination with the `<Paragraph>` component.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  argTypes: {
    children: {
      control: "text",
      description:
        "You can put any text here. It will be displayed as a title on the screen and will be used for SEO purposes.",
    },
    level: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
      description:
        "You can choose the level of the header. Currently, It component supports h1 to h6.",
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    level: "h1",
    children: "Hello World!",
  },
};
