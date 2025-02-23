"use client";

import { type MotionValue, motion } from "framer-motion";
import {
  type ComponentProps,
  type ElementType,
  type ReactNode,
  createElement,
} from "react";

type MotionElement<T extends keyof typeof motion> = ComponentProps<
  (typeof motion)[T]
> & {
  asChild?: T;
  children?: ReactNode | MotionValue<number> | MotionValue<string>;
  className?: string;
};

export default function Motion<T extends keyof typeof motion = "div">({
  children,
  asChild,
  ...props
}: MotionElement<T>) {
  const Tag = motion[asChild || "div"] as ElementType;
  return createElement(Tag, props, children as ReactNode);
}
