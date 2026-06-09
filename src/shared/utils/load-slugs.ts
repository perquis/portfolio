import fs from "fs/promises";
import path from "path";

import type { Locale } from "@/interfaces/i18n";

export type DataSourceType = "projects" | "posts";
export type DataSourceResourcesConfig = {
  dataSourceType: DataSourceType;
  locale: Locale;
};
type ResourceSlug = {
  slug: string;
};

const CURRENT_WORKING_DIRECTORY = process.cwd();
export const GET_RESOURCE_PATH = (args: DataSourceResourcesConfig): string =>
  path.join(
    CURRENT_WORKING_DIRECTORY,
    `src/app/(resources)/${args.dataSourceType}/${args.locale}`,
  );

const convertToObjectWithSlug = (slugs: string[]): ResourceSlug[] =>
  slugs.filter((slug) => !slug.startsWith("_")).map((slug) => ({ slug }));

const returnEmptyArray = () => [];

export const loadSlugs = async (args: DataSourceResourcesConfig) => {
  const resourceDirectoryPath = GET_RESOURCE_PATH(args);

  return fs
    .readdir(resourceDirectoryPath)
    .then(convertToObjectWithSlug)
    .catch(returnEmptyArray);
};
