import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  ContactForm,
  FeaturedProjectsList,
  HeroSection,
  JobsList,
  ServicesList,
  WorkflowsList,
} from "@/components";
import type { APIRequestParams } from "@/interfaces/i18n";
import { Layout } from "@/shared/ui";

export async function generateMetadata({
  params,
}: Readonly<APIRequestParams>): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return {
    title: t("HOME_META_TITLE"),
    description: t("HOME_META_DESCRIPTION"),
  };
}

export default async function Home({ params }: Readonly<APIRequestParams>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Layout>
      <HeroSection />
      <FeaturedProjectsList />
      <ServicesList />
      <JobsList />
      <WorkflowsList />
      <ContactForm />
    </Layout>
  );
}
