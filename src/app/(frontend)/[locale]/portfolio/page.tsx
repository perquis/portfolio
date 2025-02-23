import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import {
  AllProjectsList,
  ContactForm,
  HeroSection,
  WorkflowsList,
} from "@/components";
import type { APIRequestParams } from "@/interfaces/i18n";
import { Layout } from "@/shared/ui";
import { getMetadataList } from "@/shared/utils/get-metadata-list";

export async function generateMetadata({
  params,
}: Readonly<APIRequestParams>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("PORTFOLIO_META_TITLE"),
    description: t("PORTFOLIO_META_DESCRIPTION"),
  };
}

export default async function Portfolio({ params }: APIRequestParams) {
  const { locale } = await params;
  const projects = await getMetadataList({
    dataSourceType: "projects",
    locale,
  });

  return (
    <Layout>
      <HeroSection withoutCodeBlock />
      <AllProjectsList items={projects} />
      <WorkflowsList />
      <ContactForm />
    </Layout>
  );
}
