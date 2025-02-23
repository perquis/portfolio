"use client";

import { useLocale } from "next-intl";
import { Link } from "next-view-transitions";

import { placeholders } from "@/data";
import { Avatar } from "@/shared/ui";

export default function Logo({ lock = false }) {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}`}
      className="flex w-fit flex-shrink-0 flex-row items-center gap-5 rounded-full pr-5"
      tabIndex={lock ? -1 : undefined}
    >
      <Avatar
        rounded="full"
        size="tiny"
        src={placeholders.images}
        alt="Damian Werens"
      />
      <b className="text-sm dark:text-white">Damian Werens</b>
    </Link>
  );
}
