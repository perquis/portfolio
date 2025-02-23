import clsx from "clsx";
import type { ComponentProps } from "react";

type TRegular = ComponentProps<"span">;

export default function Regular({ children, className, ...props }: TRegular) {
  return (
    <span
      className={clsx("text-sm text-black/50 dark:text-white/50", className)}
      {...props}
    >
      {children}
    </span>
  );
}
