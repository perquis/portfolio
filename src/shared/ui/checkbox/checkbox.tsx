"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { Checkmark } from "@/shared/icons/generals";

type TCheckBox = ComponentProps<"input">;

const Checkbox = forwardRef<HTMLInputElement, TCheckBox>(function Checkbox(
  props: Omit<TCheckBox, "type">,
  ref,
) {
  return (
    <div className="relative flex items-center justify-center">
      <input
        ref={ref}
        type="checkbox"
        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white bg-zinc-100 ring-1 ring-zinc-200 checked:!border-indigo-400/50 checked:!bg-indigo-500 checked:!ring-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:ring-zinc-800/50"
        {...props}
      />
      <Checkmark
        width={12}
        height={12}
        className="pointer-events-none absolute hidden text-white peer-checked:block"
      />
    </div>
  );
});

export default Checkbox;
