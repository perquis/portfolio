import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { QuestionsList } from "./ui-questions-list";

export const FAQSection = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5" id="faq">
      <Regular className={"text-xl font-bold !text-zinc-950 dark:!text-white"}>
        FAQ
      </Regular>
      <Paragraph>{t("CONTACT_FAQ_DESCRIPTION")}</Paragraph>

      <QuestionsList />
    </Section>
  );
};
