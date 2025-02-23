import { ImageResponse } from "next/og";
import type { ComponentProps } from "react";

import { BASE_URL } from "@/common/constants/env";
import { getBaseImageUrl, imageSize } from "@/common/constants/op";
import type { APIRequestParams } from "@/interfaces/i18n";

const Image = (props: ComponentProps<"img">) => (
  // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  <img {...props} loading="lazy" />
);

export const BaseImage = async ({ params }: APIRequestParams) => {
  const { slug, locale } = await params;

  const data = await fetch(getBaseImageUrl({ slug: slug!, locale }));
  const open_graph_img = (await data.json()) as string;

  if (!open_graph_img) return Promise.reject(Error("Image not found"));

  const baseUrl = `${BASE_URL}${open_graph_img}`;

  return new ImageResponse(
    <Image src={baseUrl} alt={`Image for ${slug}`} />,
    imageSize,
  );
};
