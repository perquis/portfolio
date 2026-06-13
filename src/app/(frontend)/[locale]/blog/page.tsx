import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  AllPostsList,
  HeroSection,
  JobsList,
  SocialLinksList,
} from "@/components";
import type { APIRequestParams } from "@/interfaces/i18n";
import { getMetadata } from "@/shared/server/actions/get-metadata";
import { Layout } from "@/shared/ui";

export async function generateMetadata({
  params,
}: APIRequestParams): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return {
    title: t("BLOG_META_TITLE"),
    description: t("BLOG_META_DESCRIPTION"),
  };
}

export default async function Blog({ params }: APIRequestParams) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = await getMetadata({ dataSourceType: "posts", locale });

  return (
    <Layout>
      <HeroSection withoutCodeBlock />
      <AllPostsList items={posts} />
      <JobsList />
      <SocialLinksList />
    </Layout>
  );
}
