import { BASE_URL } from "@/common/constants/env";

export const imageSize = {
  width: 1200,
  height: 630,
};

export const contentTypeImage = "image/png";
export const edgeRuntime = "edge";

export const getBaseImageUrl = ({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) => `${BASE_URL}/api/op?location=projects&slug=${slug}&locale=${locale}`;
