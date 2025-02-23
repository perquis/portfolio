import type { FC } from "react";

import { Paragraph, Section, Title } from "@/shared/ui";

interface IWorkflow {
  items: Pick<IItem, "title" | "description">[];
}

export default function Workflows({ items }: IWorkflow) {
  return (
    <Section className="gap-2">
      {items.map((item, index) => (
        <Item
          key={index}
          {...item}
          index={index}
          last={items.length - 1 === index}
        />
      ))}
    </Section>
  );
}

interface IItem {
  index?: number;
  title: string;
  description: string;
  last?: boolean;
}

const Item: FC<IItem> = ({ index = 0, title, description, last }) => {
  return (
    <Section>
      <Section className="!flex-row gap-5">
        <Section className="items-center justify-start gap-2">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-950 dark:border-zinc-800 dark:text-white">
            <span>{index + 1}</span>
          </div>
          {!last && <VerticalLine />}
        </Section>
        <Section className="gap-2">
          <Title level="b">{title}</Title>
          <Paragraph className="dark:!text-white/50">{description}</Paragraph>
        </Section>
      </Section>
      {!last && (
        <div className="flex h-6 w-10 justify-center">
          <VerticalLine />
        </div>
      )}
    </Section>
  );
};

const VerticalLine = () => (
  <div className="h-full w-[1px] bg-zinc-100 dark:bg-zinc-900" />
);
