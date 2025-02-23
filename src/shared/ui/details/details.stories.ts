import type { Meta, StoryObj } from "@storybook/react";

import { Details } from "@/shared/ui";

const meta = {
  title: "Markdown/List/Details",
  component: Details,
  parameters: {
    docs: {
      description: {
        component:
          "The **Details** component is a simple component that displays a list of items in a visually appealing way. It is often used to display a list of items.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Client", content: "Kancelaria prawna" },
      {
        label: "Project",
        content:
          "The web application that gathers the leads from landing page.",
      },
      { label: "Services", content: `Web development,\nSEO,\nMarketing` },
      {
        label: "Demo",
        content: "Landing page",
        type: "link",
        href: "https://www.youtube.com/",
      },
      { label: "Status", type: "badge", content: "Done" },
      { label: "Year", content: "2021" },
    ],
  },
};
