import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { BASE_URL } from "@/common/constants/env";
import { locales } from "@/libs/next-intl";

const [en, pl] = locales;

export const metadata: Metadata = {
  metadataBase: new URL(
    BASE_URL?.startsWith("http") ? BASE_URL : `https://${BASE_URL}`,
  ),
  alternates: {
    canonical: "/",
    languages: {
      [en]: `/${en}`,
      [pl]: `/${pl}`,
    },
  },
  openGraph: {
    images: "/static/pages/og-image.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
