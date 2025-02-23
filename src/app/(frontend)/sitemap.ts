import type { MetadataRoute } from "next";

import { locales } from "@/libs/next-intl";

const pathnames = ["/", "/portfolio", "/blog", "/contact"];

function getUrl(pathname: string, locale: string) {
  return `${process.env.VERCEL_URL}/${locale}${pathname === "/" ? "" : pathname}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const projects = [] as { slug: string }[];
  const posts = [] as { slug: string }[];

  return [
    ...pathnames.map((pathname) => ({
      url: getUrl(pathname, "en"),
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, getUrl(pathname, locale)]),
        ),
      },
    })),
    ...projects.map(({ slug }) => ({
      url: getUrl(`/portfolio/${slug}`, "en"),
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [
            locale,
            getUrl(`/portfolio/${slug}`, locale),
          ]),
        ),
      },
    })),
    ...posts.map(({ slug }) => ({
      url: getUrl(`/blog/${slug}`, "en"),
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, getUrl(`/blog/${slug}`, locale)]),
        ),
      },
    })),
  ];
}
