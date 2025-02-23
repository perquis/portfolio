import createMiddleware from "next-intl/middleware";

import { locales } from "@/libs/next-intl";

export const withNextIntl = createMiddleware({
  locales,
  localeDetection: true,
  defaultLocale: locales[0],
});
