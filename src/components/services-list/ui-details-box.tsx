import type { FC } from "react";

import { Paragraph, Section, Title } from "@/shared/ui";

import type { Chip } from "./ui-list";

export const DetailsBox: FC<Record<"selected", Chip>> = ({
  selected: { label, description },
}) => {
  return (
    <Section
      className="mt-5 gap-1 rounded-[20px] border border-zinc-200 bg-white p-1 shadow dark:border-zinc-800 dark:bg-zinc-950"
      id="description"
    >
      <Section className="gap-1 rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
        <Title level="b" className="text-sm">
          {label}
        </Title>
        <Paragraph className="text-sm">{description}</Paragraph>
      </Section>
    </Section>
  );
};
