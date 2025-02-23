import clsx from "clsx";
import type { ComponentProps } from "react";

import type { Level } from "@/interfaces/html";

type TTitle = {
  level?: Level;
} & ComponentProps<"h1">;

export default function Title({
  level: Tag = "h2",
  className,
  children,
  ...props
}: TTitle) {
  return (
    <Tag
      className={clsx(
        "text-left font-bold text-zinc-950 dark:text-white",
        Tag === "h1" && "text-4xl lg:text-5xl xl:text-6xl",
        Tag === "h2" && "text-3xl lg:text-4xl xl:text-5xl",
        Tag === "h3" && "text-2xl lg:text-3xl xl:text-4xl",
        Tag === "h4" && "text-xl lg:text-2xl xl:text-3xl",
        Tag === "h5" && "text-lg lg:text-xl xl:text-2xl",
        Tag === "h6" && "text-base lg:text-lg xl:text-xl",
        Tag === "b" && "text-base",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
