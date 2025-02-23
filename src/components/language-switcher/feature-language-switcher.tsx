"use client";

import { Select } from "@headlessui/react";
import { useLocale } from "next-intl";

import { locales, usePathname, useRouter } from "@/libs/next-intl";
import { getLanguageNames } from "@/shared/utils/get-language-names";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <Select
      name="status"
      className="rounded border border-zinc-200 bg-transparent bg-white p-1 text-xs capitalize text-zinc-600 shadow dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400 dark:shadow-none"
      aria-label="Current language"
      onChange={onChange}
      defaultValue={locale}
    >
      {getLanguageNames(locales, locale).map(({ code, fullName }) => (
        <option value={code} key={fullName}>
          {fullName} ({code.toUpperCase()})
        </option>
      ))}
    </Select>
  );
};
