"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { useHotkeys } from "@/components/command-menu/utils-use-hotkeys";
import { useSearchByQuery } from "@/components/command-menu/utils-use-search-by-query";
import { links } from "@/data";
import type { Frontmatter } from "@/interfaces/markdown";
import { locales, useRouter } from "@/libs/next-intl";
import { useChangeLocale } from "@/shared/hooks";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shared/ui/command/command";
import { isEmptyArray } from "@/shared/utils";
import { getLanguageNames } from "@/shared/utils/get-language-names";

import { settings } from "./data-settings";

export type Article = Pick<Frontmatter, "title" | "slug" | "tags">;
export type ICommandMenu = Record<
  "data",
  [posts: Article[], projects: Article[]]
>;

export function CommandMenu({ data }: ICommandMenu) {
  const locale = useLocale();
  const t = useTranslations();

  const { push } = useRouter();
  const { setTheme } = useTheme();

  const { isOpen, toggle } = useHotkeys();
  const { changeLanguage } = useChangeLocale();
  const [[filteredPosts, filteredProjects], onValueChange] =
    useSearchByQuery(data);

  return (
    <CommandDialog open={isOpen} onOpenChange={toggle}>
      <CommandInput
        placeholder={t("COMMAND_SEARCH_PLACEHOLDER")}
        onValueChange={onValueChange}
      />
      <CommandList className="py-1">
        <CommandEmpty>{t("NO_RESULTS")}</CommandEmpty>
        <CommandGroup heading={t("SUGGESTIONS")}>
          {links.map(({ Icon, href, label }) => (
            <CommandItem key={label} asChild onSelect={() => push(href)}>
              <div className="flex w-full items-center gap-4">
                <Icon />
                {/* @ts-expect-error */}
                {t(`NAVIGATION_${label.toUpperCase()}`)}
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("THEMES")}>
          {settings.map(({ Icon, label, selectValue }) => (
            <CommandItem
              onSelect={() => setTheme(selectValue)}
              key={label}
              asChild
            >
              <button className="flex w-full items-center gap-4">
                <Icon />
                {/* @ts-expect-error */}
                {t(label)}
              </button>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("LANGUAGES")}>
          {getLanguageNames(locales, locale).map(({ code, fullName }) => (
            <CommandItem
              key={fullName}
              asChild
              onSelect={() => changeLanguage(code)}
            >
              <span className="capitalize">
                {fullName} ({code.toUpperCase()})
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
        {!isEmptyArray(filteredPosts) && (
          <CommandGroup heading={t("POSTS")}>
            {filteredPosts.map(({ title, slug }) => (
              <CommandItem key={title} onSelect={() => push(`/blog/${slug}`)}>
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {!isEmptyArray(filteredProjects) && (
          <CommandGroup heading={t("PROJECTS")}>
            {filteredProjects.map(({ title, slug }) => (
              <CommandItem
                key={title}
                onSelect={() => push(`/portfolio/${slug}`)}
              >
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
