import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  ContactForm,
  FAQSection,
  HeroSection,
  ServicesList,
  SocialLinksList,
} from "@/components";
import type { APIRequestParams } from "@/interfaces/i18n";
import { Layout } from "@/shared/ui";

export async function generateMetadata({
  params,
}: APIRequestParams): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return {
    title: t("CONTACT_META_TITLE"),
    description: t("CONTACT_META_DESCRIPTION"),
  };
}

export default async function Contact({ params }: APIRequestParams) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <Layout>
        <HeroSection withoutCodeBlock />
        <FAQSection />
        <ServicesList />
        <ContactForm />
        <SocialLinksList />
      </Layout>
    </div>
  );
}
