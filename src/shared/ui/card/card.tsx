import clsx from "clsx";
import { useLocale } from "next-intl";
import { Link } from "next-view-transitions";
import { type ComponentProps } from "react";

import { CalendarEvent } from "@/shared/icons/generals";
import {
  Badge,
  DynamicImage,
  Paragraph,
  Regular,
  Section,
  Title,
} from "@/shared/ui";
import type { Metadata } from "@/shared/utils/get-metadata-list";

type NextLinkProps = ComponentProps<typeof Link>;

type TCard = {
  className?: string;
} & Omit<NextLinkProps, "href"> &
  Metadata;

export default function Card({
  title,
  description,
  className,
  light_img,
  dark_img,
  publishedAt,
  slug,
  tags,
}: TCard) {
  const locale = useLocale();
  const redirectTo = `/${locale}/blog/${slug}`;

  return (
    <Section className={clsx("items-start gap-3 rounded-3xl", className)}>
      <Link href={redirectTo} className="relative w-full rounded-lg">
        <DynamicImage
          resolution="16:9"
          className="overflow-hidden rounded-lg border border-zinc-200/50 dark:border-zinc-800/50"
          lightUrl={light_img}
          darkUrl={dark_img}
          alt={title}
        />
      </Link>

      <Section className="mt-2 items-start">
        <Link
          href={redirectTo}
          className="hover:underline focus-visible:underline"
        >
          <Title level="b" className="text-lg">
            {title}
          </Title>
        </Link>
        <Paragraph className="!text-sm">{description}</Paragraph>
      </Section>

      <Section className="mt-2 !flex-row gap-1.5">
        <Section className="!flex-row gap-1.5 text-zinc-400">
          <CalendarEvent width={16} height={16} />
          <Regular className="!text-xs !text-inherit">
            {locale === "en" ? "Published at:" : "Opublikowano:"}
          </Regular>
        </Section>
        <Paragraph className="!text-xs">
          {new Date(publishedAt).toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Paragraph>
      </Section>

      <Section className="!flex-row gap-1.5">
        {tags.map((tag, i) => (
          <Badge
            key={i}
            className="!px-2 !py-1 !text-xs"
            color="indigo"
            rounded="default"
          >
            {tag}
          </Badge>
        ))}
      </Section>
    </Section>
  );
}
