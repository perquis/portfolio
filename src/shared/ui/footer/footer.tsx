import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

import { LanguageSwitcher, ThemeToggler } from "@/components";
import { Logo, Regular, Section } from "@/shared/ui";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="mx-auto w-full max-w-screen-sm">
      <Section className="!flex-row flex-wrap items-start justify-between gap-5">
        <Logo />
        <Section
          className={clsx(
            "z-50 items-end gap-2",
            locale === "en" && "max-[424px]:!items-start",
            locale === "pl" && "max-[492px]:!items-start",
          )}
        >
          <Regular className="!text-sm">
            {t("FOOTER_ALL_RIGHTS_RESERVED")}
          </Regular>
          <LanguageSwitcher />
          <ThemeToggler />
        </Section>
      </Section>
    </footer>
  );
}
