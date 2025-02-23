"use client";

import clsx from "clsx";
import { type MotionProps } from "framer-motion";
import { type ComponentProps, forwardRef } from "react";

type TSection = MotionProps & ComponentProps<"section">;

const Section = forwardRef<HTMLDivElement, TSection>(function Section(
  { children, className, ...props },
  ref,
) {
  return (
    <section className={clsx("flex flex-col", className)} {...props} ref={ref}>
      {children}
    </section>
  );
});

export default Section;
