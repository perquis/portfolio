import type { PropsWithChildren } from "react";

import { locales } from "@/libs/next-intl";

const [en, pl] = locales;

export const metadata = {
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
