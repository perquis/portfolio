import clsx from "clsx";
import { match } from "ts-pattern";

import { statusActions } from "@/data";
import { IconButton, Motion, Paragraph, Section } from "@/shared/ui";

export type AlertStatus = (typeof statusActions)[number]["name"];

interface IAlert {
  status: AlertStatus;
  content: string;
  close?: () => void;
}

export default function Alert({ status, content, close }: IAlert) {
  const foundIcon = statusActions.find((action) => action.name === status)!;
  const textColor = match(status)
    .with("info", () => "bg-blue-500")
    .with("success", () => "bg-green-500")
    .with("warning", () => "bg-yellow-500")
    .with("error", () => "bg-rose-500")
    .otherwise(() => "bg-gray-500");

  return (
    <Motion
      className="z-50"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 20 }}
    >
      <Section className="max-w-sm !flex-row items-start gap-3 rounded-lg border-zinc-800/50 bg-zinc-900/70 p-3 shadow-md backdrop-blur-xl dark:bg-white/70">
        <div className={clsx("rounded-full p-1 text-white", textColor)}>
          <foundIcon.Icon width={16} height={16} />
        </div>
        <Paragraph className="text-sm !text-white dark:!text-black">
          {content}
        </Paragraph>
        <IconButton
          className="!text-zinc-300 hover:!bg-black/25 hover:!text-white focus-visible:!bg-black/25 focus-visible:!text-white dark:!text-zinc-700 dark:hover:!bg-white/50 dark:hover:!text-zinc-900 dark:focus-visible:!bg-white/50 dark:focus-visible:!text-zinc-900"
          size="small"
          icon="Close"
          onClick={close}
        />
      </Section>
    </Motion>
  );
}
