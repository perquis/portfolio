"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { Button, Container, Paragraph, Section, Title } from "@/shared/ui";

export default function NotFound() {
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Container>
      <Section className="items-start gap-5">
        <Section className="gap-2">
          <Title level="h6">{t("NOT_FOUND_TITLE")}</Title>
          <Paragraph>{t("NOT_FOUND_DESCRIPTION")}</Paragraph>
        </Section>

        <Button
          mode="simple"
          size="medium"
          variants="black"
          onClick={() => push("/")}
        >
          {t("NOT_FOUND_BUTTON")}
        </Button>
      </Section>
    </Container>
  );
}
