import type { Metadata } from "next";

import type { APIRequestParams } from "@/interfaces/i18n";
import type { Location } from "@/interfaces/markdown";
import { getMetadata } from "@/shared/server/actions/get-metadata";
import {
  type DataSourceResourcesConfig,
  loadSlugs,
} from "@/shared/utils/load-slugs";

const getLoadedSlugs = (args: Pick<DataSourceResourcesConfig, "locale">) =>
  loadSlugs({
    locale: args.locale,
    dataSourceType: "posts",
  });

export async function generateStaticParams({ params }: APIRequestParams) {
  return getLoadedSlugs(await params);
}

export const generateMetadata =
  (dataSourceType: DataSourceResourcesConfig["dataSourceType"]) =>
  async (args: APIRequestParams): Promise<Metadata> => {
    const { locale, slug } = await args.params;
    const metadataList = await getMetadata({ dataSourceType, locale });

    const metadata = metadataList.find((metadata) => metadata.slug === slug);

    if (!metadata) return Promise.reject(new Error("Metadata not found"));

    return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        images: metadata.open_graph_img,
      },
    };
  };

export const MarkdownPageSSR = (location: Location) =>
  async function SSR({ params }: APIRequestParams) {
    const { slug, locale } = await params;
    const { default: MarkdownPage } = await import(
      `@/app/(resources)/${location}/${locale}/${slug}/${slug}.mdx`
    );

    return <MarkdownPage />;
  };
