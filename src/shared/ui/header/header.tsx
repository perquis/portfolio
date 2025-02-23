"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import type { Nullable } from "@/interfaces/utility-types";
import { usePathname } from "@/libs/next-intl";
import { ArrowLink, Paragraph, Regular, Section } from "@/shared/ui";
import type en from "@/translations/en.json";

type MessageKeys = keyof typeof en;

interface ILink {
  name: string;
  url: string;
}

interface IHeader {
  heading: MessageKeys;
  description?: Nullable<MessageKeys>;
  pathname?: Nullable<string>;
  link?: Nullable<ILink>;
}

const isTargetBlank = (url: string) => url?.startsWith("http");

export default function Header({
  heading,
  description = null,
  pathname = null,
  link = null,
}: IHeader) {
  const t = useTranslations();

  const currentPathname = usePathname(),
    isSpecificPage = !pathname || currentPathname !== pathname;

  const target = isTargetBlank(link?.url ?? "") ? "_blank" : "_self";

  return (
    <Section className="w-full gap-5">
      <Section
        className={clsx("!flex-row", { "justify-between": isSpecificPage })}
      >
        <Regular className="font-semibold">{t(heading)}</Regular>
        {isSpecificPage && link && (
          <ArrowLink target={target} rel="noreferrer;noopenner" href={link.url}>
            {link.name}
          </ArrowLink>
        )}
      </Section>

      {description && <Paragraph>{t(description)}</Paragraph>}
    </Section>
  );
}
