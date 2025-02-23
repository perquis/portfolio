"use client";

import clsx from "clsx";
import { type ComponentProps, useEffect, useRef } from "react";
import { match } from "ts-pattern";

import type { Alignment } from "@/interfaces/variants";
import { useOpen } from "@/shared/hooks";
import { Motion } from "@/shared/ui";

type TTooltip = {
  label: string;
  disabled?: boolean;
  alignment?: Extract<Alignment, "bottom" | "left" | "right" | "top">;
} & ComponentProps<"div">;

export default function Tooltip({
  children,
  label,
  disabled,
  className,
  alignment = "top",
}: TTooltip) {
  const [isOpen, [open, close]] = useOpen();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = containerRef.current?.children as unknown as HTMLElement[];

    const [element] = nodes;
    if (!element) return;
    element.addEventListener("focus", open);

    element.addEventListener("blur", close);

    return () => {
      element.removeEventListener("focus", open);
      element.removeEventListener("blur", close);
    };
  }, [open, close]);

  const direction = match(alignment)
    .with("top", () => "bottom-[calc(100%+12px)]")
    .with("bottom", () => "top-[calc(100%+12px)]")
    .with("left", () => "right-[calc(100%+12px)] -translate-y-1/2 top-1/2")
    .with("right", () => "left-[calc(100%+12px)] -translate-y-1/2 top-1/2")
    .run();

  return (
    <div
      className={clsx(
        "pointer-events-none relative flex w-fit justify-center",
        className,
      )}
    >
      <div
        className="pointer-events-auto"
        onMouseEnter={open}
        onMouseLeave={close}
        ref={containerRef}
      >
        {children}
      </div>
      {isOpen && !disabled && (
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={clsx(
            "text-x pointer-events-none absolute w-max max-w-64 rounded-lg border-t border-zinc-800/90 bg-zinc-900/90 px-3 py-2 text-white backdrop-blur",
            direction,
          )}
        >
          {label}
        </Motion>
      )}
    </div>
  );
}
