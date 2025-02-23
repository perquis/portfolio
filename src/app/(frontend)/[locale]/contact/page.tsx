import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
  const t = await getTranslations({ locale });

  return {
    title: t("CONTACT_META_TITLE"),
    description: t("CONTACT_META_DESCRIPTION"),
  };
}

export default async function Contact() {
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
