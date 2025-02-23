"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { type Dispatch, type FC, type SetStateAction, useState } from "react";

import { Link } from "@/libs/next-intl";
import { ArrowLeft } from "@/shared/icons/generals";
import {
  ArrowLink,
  DynamicImage,
  Motion,
  Paragraph,
  Regular,
  Section,
  Title,
} from "@/shared/ui";
import type { Metadata } from "@/shared/utils/get-metadata-list";

export const List: FC<{ items: Metadata[] }> = ({ items }) => {
  const [selected, setSelected] = useState(items[0]?.title);

  if (items.length === 0) return null;

  return (
    <Section>
      {items.map((item, index) => (
        <Item
          key={index}
          {...item}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </Section>
  );
};

const Item: FC<
  Metadata & {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
  }
> = ({
  title,
  year,
  light_img,
  dark_img,
  tags,
  slug,
  description,
  selected,
  setSelected,
}) => {
  const t = useTranslations();
  const onClick = () => setSelected(title);
  const isActive = title === selected;
  const redirectTo = `/portfolio/${slug}`;

  return (
    <Section
      className={clsx(
        isActive && "pb-5",
        "gap-5 border-b border-zinc-200/50 last:border-b-0 dark:border-zinc-800/50",
      )}
    >
      <button
        className="flex justify-between rounded-lg py-2.5 text-sm"
        onClick={onClick}
        disabled={isActive}
      >
        <Title level="b">{title}</Title>

        <Section className="relative !flex-row items-center text-zinc-800 dark:text-zinc-200">
          <Regular className="mr-8 !text-base">{year}</Regular>
          <Motion
            className="absolute right-0"
            animate={isActive ? { rotate: -90 } : { rotate: 0 }}
          >
            <ArrowLeft width={24} height={24} />
          </Motion>
        </Section>
      </button>

      <Motion
        animate={isActive ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx("overflow-hidden", isActive ? "h-auto" : "h-0")}
      >
        <Section className="gap-5">
          <Link href={redirectTo} className="rounded-lg">
            <DynamicImage
              lightUrl={light_img}
              darkUrl={dark_img}
              alt={title}
              className="overflow-hidden rounded-lg border dark:border-zinc-800/50"
              resolution="16:9"
            />
          </Link>
          <Section className="!flex-row gap-5">
            <Regular className="w-full">{tags.join(", ")}</Regular>
            <Section className="w-full items-start gap-10">
              <Paragraph className="!text-sm">{description}</Paragraph>
              <ArrowLink href={redirectTo}>{t("DETAILS")}</ArrowLink>
            </Section>
          </Section>
        </Section>
      </Motion>
    </Section>
  );
};
