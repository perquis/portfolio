import type { Meta, StoryObj } from "@storybook/react";

import { useOpen } from "@/shared/hooks";
import { Button, Dialog, Paragraph, Section, Title } from "@/shared/ui";

const meta = {
  title: "Shared/Overlays/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "The **Dialog** component is a simple component that displays a modal dialog.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: {
        type: "select",
      },
      options: [
        "top-left",
        "top",
        "top-right",
        "left",
        "center",
        "right",
        "bottom-left",
        "bottom",
        "bottom-right",
      ],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = () => (
  <Section className="gap-3">
    <Section className="gap-2">
      <Title level="h6">We use cookies 🍪</Title>
      <Paragraph>
        To provide you with the best experience on our website, we use cookies.
        Cookies help us personalize content, analyze site traffic, and deliver
        advertisements tailored to your interests.
      </Paragraph>
    </Section>
    <Section className="!flex-row justify-end gap-2">
      <Button mode="simple" size="medium" variants="white">
        Learn more
      </Button>
      <Button mode="simple" size="medium" variants="black">
        Accept
      </Button>
    </Section>
  </Section>
);

export const Default: Story = {
  // @ts-ignore
  args: {
    alignment: "center",
    options: {
      disabled: true,
      autoFocus: false,
    },
  },
  decorators: [
    (Story, options) => {
      const [isOpen, [open, close]] = useOpen();

      return (
        <>
          <Button onClick={open} mode="simple" size="medium" variants="black">
            Open Dialog
          </Button>
          <Story
            args={{
              isOpen,
              close,
              children: <Example />,
              alignment: options.args.alignment,
              options: options.args.options,
            }}
          ></Story>
        </>
      );
    },
  ],
};
