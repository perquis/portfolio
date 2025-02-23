import clsx from "clsx";
import type { ComponentProps } from "react";

interface IChip {
  isActive?: boolean;
}

type TChip = ComponentProps<"button">;

export default function Chip({
  children,
  className,
  isActive,
  ...props
}: TChip & IChip) {
  return (
    <button
      className={clsx(
        "rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-zinc-500 transition-colors duration-300 ease-in-out hover:bg-zinc-200 hover:text-zinc-700 focus-visible:bg-zinc-200 focus-visible:text-zinc-700 active:scale-95 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 dark:focus-visible:bg-zinc-800 dark:focus-visible:text-zinc-300",
        isActive &&
          "pointer-events-none !bg-indigo-50 !text-indigo-600 disabled:cursor-default dark:!bg-indigo-950 dark:!text-indigo-400",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
