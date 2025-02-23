"use client";

import { useTranslations } from "next-intl";

import { placeholders } from "@/data";
import { Avatar, Paragraph, Section, Title } from "@/shared/ui";

export const AboutMe = () => {
  const t = useTranslations();

  return (
    <Section className="items-start gap-5">
      <Avatar
        src={placeholders.images}
        alt="Damian Werens"
        rounded="full"
        size="large"
      />
      <Section>
        <Title level="h6">Damian Werens</Title>
        <Paragraph className="!text-zinc-500">
          Full-Stack Developer & Digital Designer
        </Paragraph>
      </Section>
      <Paragraph>{t("HOME_META_DESCRIPTION")}</Paragraph>
    </Section>
  );
};
