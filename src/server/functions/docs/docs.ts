/* eslint-disable import/no-anonymous-default-export */
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { headers } from "next/headers";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { Locale } from "../../../../@types/i18n";

const getPathname = (location: Location, slug = "") => path.join(process.cwd(), "src", "docs", location, slug);

/**
 * This function is used to get the slug from `the server side`
 * and is used to determine if the page is a slug page or not 🎉.
 */
async function getServerSideSlug() {
  "use server";

  const headersList = headers();
  const pathname = headersList.get("x-frame-pathname");

  const [_page, slug] =
    pathname
      ?.split("/")
      .filter((v) => v !== "pl" && v !== "en")
      .filter(Boolean) ?? [];

  return slug || null;
}

type Location = "projects" | "posts";
async function getSlugs(location: Location) {
  "use server";

  const pathname = getPathname(location);
  const directories = fs.readdirSync(pathname);

  return directories.map((slug) => ({
    slug,
  }));
}

const createMdxFilenameFromSlug = (slug: string, locale: Locale) => `${slug}.${locale}.mdx`;

async function getSerializedSource(location: Location, slug: string, locale: Locale) {
  "use server";
  const filename = createMdxFilenameFromSlug(slug, locale),
    pathname = getPathname(location, slug),
    file = fs.readFileSync(path.join(pathname, filename), { encoding: "utf-8" });

  return await serialize(file, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "wrap" }]],
    },
  });
}

export default {
  getServerSideSlug,
  getSerializedSource,
  getSlugs,
};
