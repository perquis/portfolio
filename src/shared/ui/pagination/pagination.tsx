import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Link as NextViewTransitionLink } from "next-view-transitions";
import type { ComponentProps } from "react";

import { type Link } from "@/libs/next-intl";
import { ArrowLeft, ArrowRight } from "@/shared/icons/generals";
import Regular from "@/shared/ui/regular/regular";
import Section from "@/shared/ui/section/section";

type PageButton = "next" | "prev";

type IPagination = {
  [key in PageButton]?: ComponentProps<typeof Link> & { text?: string };
};

export default function Pagination({ next, prev }: IPagination) {
  const t = useTranslations();

  if (!next && !prev) return null;

  if (next && !prev) {
    return (
      <Section className="!flex-row justify-end text-zinc-800 dark:text-zinc-200">
        <Section className="max-w-[50%] !flex-row items-end gap-2">
          <PageLink {...next}>{t("NEXT")}</PageLink>
          <ArrowRight className="flex-shrink-0" width={20} height={20} />
        </Section>
      </Section>
    );
  }

  if (!next && prev) {
    return (
      <Section className="!flex-row justify-start text-zinc-800 dark:text-zinc-200">
        <Section className="max-w-[50%] !flex-row items-end gap-2">
          <ArrowLeft className="flex-shrink-0" width={20} height={20} />
          <PageLink {...prev}>{t("PREV")}</PageLink>
        </Section>
      </Section>
    );
  }

  return (
    <Section className="!flex-row justify-between gap-5 text-zinc-800 dark:text-zinc-200">
      <Section className="flex-grow !flex-row items-end gap-2">
        <ArrowLeft className="flex-shrink-0" width={20} height={20} />
        <PageLink {...prev!}>{t("PREV")}</PageLink>
      </Section>
      <Section className="flex-grow !flex-row items-end gap-2">
        <PageLink {...next!}>{t("NEXT")}</PageLink>
        <ArrowRight className="flex-shrink-0" width={20} height={20} />
      </Section>
    </Section>
  );
}

const PageLink = (props: IPagination["next"]) => {
  return (
    <Section className="gap-1">
      <Regular className="text-xs">{props?.children}</Regular>
      {/* @ts-expect-error next-view-transitions types lag behind React 19 popover attribute */}
      <NextViewTransitionLink
        className={clsx("!text-sm font-medium", props?.className)}
        {...props!}
      >
        {props!.text}
      </NextViewTransitionLink>
    </Section>
  );
};
