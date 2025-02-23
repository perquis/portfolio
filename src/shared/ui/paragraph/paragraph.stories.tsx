import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "@/shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Markdown/Text/Paragraph",
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component:
          "The **Paragraph** component is very useful for displaying a block of text. For example, if you write **any article for this project**, you can use it to show the content. It's very common to use it in combination with the `<Title>` component.",
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
      description: "You can put any text here.",
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children:
      "This is a simple paragraph that you can use to display any text you want.",
  },
};
