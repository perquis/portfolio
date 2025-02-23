import fs from "fs/promises";
import path from "path";

import {
  type DataSourceResourcesConfig,
  GET_RESOURCE_PATH,
} from "@/shared/utils/load-slugs";

export interface Metadata {
  description: string;
  publishedAt: Date;
  slug: string;
  year: number;
  light_img: string;
  dark_img: string;
  tags: string[];
  title: string;
  open_graph_img?: string;
}

export const getMetadataList = async (
  args: DataSourceResourcesConfig,
): Promise<Metadata[]> => {
  const metadataDirectoryPath = GET_RESOURCE_PATH(args),
    handleFilePathError = () => [] as Metadata[];

  return fs
    .readdir(metadataDirectoryPath)
    .then((dirnames) =>
      Promise.all(
        dirnames.map((filename) =>
          fs
            .readFile(
              path.join(metadataDirectoryPath, filename, `${filename}.json`),
              "utf-8",
            )
            .then(JSON.parse)
            .catch(handleFilePathError),
        ),
      ).catch(handleFilePathError),
    )
    .catch(handleFilePathError);
};
