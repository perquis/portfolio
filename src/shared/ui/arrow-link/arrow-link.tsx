import clsx from "clsx";
import type { ComponentProps } from "react";

import { Link } from "@/libs/next-intl";
import * as icons from "@/shared/icons/generals";

type TArrowLink = ComponentProps<typeof Link>;

export default function ArrowLink({
  children,
  className,
  ...props
}: TArrowLink) {
  return (
    <Link
      className={clsx(
        "flex gap-2 text-sm font-medium transition-colors duration-200 hover:text-indigo-500 hover:underline focus-visible:text-indigo-500 focus-visible:underline",
        className,
      )}
      {...props}
    >
      {children} <icons.ArrowLineRight width={20} height={20} />
    </Link>
  );
}
