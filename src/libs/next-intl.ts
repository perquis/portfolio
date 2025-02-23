import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "pl"];

export const routing = defineRouting({
  locales,
  defaultLocale: locales[0],
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
