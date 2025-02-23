import clsx from "clsx";
import type { ComponentProps } from "react";

type TGlobalLayout = ComponentProps<"div">;

export default function GlobalLayout({
  children,
  className,
  ...props
}: TGlobalLayout) {
  return (
    <div
      className={clsx(
        "min-h-screen w-full overflow-x-hidden py-24 sm:py-32",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
