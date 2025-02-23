"use client";

import clsx from "clsx";
import type { ComponentProps } from "react";

type TForm = ComponentProps<"form">;

export default function Form({
  children,
  className,
  onSubmit = (e) => e.preventDefault(),
  ...props
}: TForm) {
  return (
    <form
      onSubmit={onSubmit}
      className={clsx("flex flex-col gap-3", className)}
      {...props}
    >
      {children}
    </form>
  );
}
