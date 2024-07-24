import clsx from "clsx";
import type { ComponentProps } from "react";

type IParagraph = ComponentProps<"p">;

export default function Paragraph({ children, className, ...props }: IParagraph) {
  return (
    <p className={clsx("text-left text-base text-zinc-800 dark:text-zinc-200", className)} {...props}>
      {children}
    </p>
  );
}
