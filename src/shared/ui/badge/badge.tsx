import clsx from "clsx";
import type { ComponentProps } from "react";

import type { Color } from "@/interfaces/tailwindcss";
import type { Rounded } from "@/interfaces/variants";
import { getColorClass } from "@/shared/ui/badge/getColorClass";

type TBadge = {
  color: Color;
  rounded: Rounded;
  border?: boolean;
} & ComponentProps<"span">;

export default function Badge({
  children,
  color,
  className,
  border,
  rounded = "default",
  ...props
}: TBadge) {
  const colorClass = getColorClass(color);

  return (
    <span
      className={clsx(
        "px-3 py-2 text-sm",
        rounded === "default" ? "rounded-md" : "rounded-full",
        border && "border",
        colorClass,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
