import { Grid } from "@/shared/icons/generals";
import { StackIcon, type StackIconName } from "@/shared/icons/programming-languages/stack-icon";
import { Paragraph, Section, Title } from "@/shared/ui";

type TTechnology = {
  icon: StackIconName;
  name: string;
  content: string;
};

export default function Technology({ icon, name, content }: TTechnology) {
  return (
    <Section className="relative flex-1 gap-2 overflow-hidden rounded-xl border border-zinc-300 bg-white p-4 shadow dark:border-zinc-800/50 dark:bg-zinc-950">
      <StackIcon name={icon} width={32} height={32} />
      <Section className="z-50 gap-1">
        <Title level="b">{name}</Title>
        <Paragraph className="text-sm">{content}</Paragraph>
      </Section>
      <Grid className="pointer-events-none absolute bottom-0 right-0" />
    </Section>
  );
}
