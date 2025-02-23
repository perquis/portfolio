import clsx from "clsx";
import type { ComponentProps } from "react";

type TContainer = ComponentProps<"div">;

export default function Container({
  children,
  className,
  ...props
}: TContainer) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-screen-sm px-5 text-zinc-950 dark:text-white lg:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
