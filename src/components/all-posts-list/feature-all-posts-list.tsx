import { useTranslations } from "next-intl";
import type { FC } from "react";

import { Regular, SearchBar, Section, Title } from "@/shared/ui";
import type { Metadata } from "@/shared/utils/get-metadata-list";

import { List } from "./ui-list";

export const AllPostsList: FC<Record<"items", Metadata[]>> = ({ items }) => {
  const fullYear = new Date("2024-07-01").getFullYear();
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Title level="h6">Blog</Title>
        <Regular className="text-base font-medium lg:text-lg xl:text-xl">
          {fullYear} - {t("BLOG_REGULAR_PRESENT")}
        </Regular>
      </Section>

      <SearchBar placeholder={t("BLOG_SEARCHBAR_PLACEHOLDER")} />

      <List items={items} />
    </Section>
  );
};
