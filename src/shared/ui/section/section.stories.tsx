import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph, Section, Title } from "@/shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Markdown/UI/Section",
  component: Section,
  parameters: {
    docs: {
      description: {
        component:
          "The **Section** component is used to group related content together. It can be used to create a section of a page, or to group related content together within a larger section. It can be customized with a style object to apply custom styles to the component.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  argTypes: {
    className: {
      control: {
        type: "text",
      },
      description:
        "By using Tailwind CSS, you can apply custom styles to the component by passing a class name. Recomended classes are `gap-0`, `gap-1`, `gap-2`, `gap-3`, ... `gap-10` etc. and `flex-row` with `justify-between`.",
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render() {
    return (
      <Section className="gap-2">
        <Title level="h4">How to use Cypress with Next.js?</Title>
        <Paragraph>
          Cypress is a powerful tool that allows you to write end-to-end tests
          for your application. In this article, we will show you how to use
          Cypress with Next.js. We will cover the following topics:
        </Paragraph>
      </Section>
    );
  },
};
