import {
  type Metadata,
  getMetadataList,
} from "@/shared/utils/get-metadata-list";
import type { DataSourceResourcesConfig } from "@/shared/utils/load-slugs";

export const getMetadata = async (
  args: DataSourceResourcesConfig,
): Promise<Metadata[]> => getMetadataList(args);
