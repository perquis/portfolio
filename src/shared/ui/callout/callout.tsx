import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { match } from "ts-pattern";

import { statusActions } from "@/data";
import { Section, Title } from "@/shared/ui";

export interface ICallout extends PropsWithChildren {
  title: string;
  variants?: "info" | "warning" | "error" | "success";
}

export default function Callout({
  title,
  children,
  variants = "info",
}: ICallout) {
  const classes = match(variants)
    .with(
      "info",
      () =>
        "bg-indigo-50 border-indigo-200/50 dark:bg-indigo-950/50 dark:border-indigo-800/50",
    )
    .with(
      "warning",
      () =>
        "bg-yellow-50 border-yellow-200/50 dark:bg-yellow-950/50 dark:border-yellow-800/50",
    )
    .with(
      "error",
      () =>
        "bg-red-50 border-red-200/50 dark:bg-red-950/50 dark:border-red-800/50",
    )
    .with(
      "success",
      () =>
        "bg-green-50 border-green-200/50 dark:bg-green-950/50 dark:border-green-800/50",
    )
    .exhaustive();

  const titleColor = match(variants)
    .with("info", () => "!text-indigo-600 dark:!text-indigo-500")
    .with("warning", () => "!text-yellow-600 dark:!text-yellow-500")
    .with("error", () => "!text-red-600 dark:!text-red-500")
    .with("success", () => "!text-green-600 dark:!text-green-500")
    .exhaustive();

  const foundIcon = statusActions.find((icon) => icon.name === variants)!;

  return (
    <Section
      className={clsx("!flex-row gap-3 rounded-lg border px-5 py-4", classes)}
    >
      <foundIcon.Icon
        className={clsx(titleColor, "flex-shrink-0")}
        width={24}
        height={24}
      />
      <Section className="gap-1">
        <Title className={titleColor} level="b">
          {title}
        </Title>
        {children}
      </Section>
    </Section>
  );
}
