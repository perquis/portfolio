import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ContactForm, Projects } from "@/components";
import { Divider, Layout } from "@/shared/ui";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("PORTFOLIO_META_TITLE"),
    description: t("PORTFOLIO_META_DESCRIPTION"),
  };
}

const components = [Projects, Divider, ContactForm];

export default function Portfolio() {
  return <Layout components={components} />;
}
