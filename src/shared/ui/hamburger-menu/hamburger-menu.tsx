"use client";

import type { MotionProps } from "framer-motion";
import { useTranslations } from "next-intl";
import { type ComponentProps, type FC, useRef } from "react";
import ReactFocusLock from "react-focus-lock";

import {
  useHideBodyScrollbar,
  useKey,
  useOpen,
  useOutsideOnClick,
} from "@/shared/hooks";
import type { Breadcrumbs } from "@/shared/ui";
import { Motion, Section, Tab } from "@/shared/ui";

import { rotation } from "./anime-rotation";

type THamburgerMenu = ComponentProps<typeof Breadcrumbs>;
type TLink =
  | "NAVIGATION_ABOUT"
  | "NAVIGATION_PORTFOLIO"
  | "NAVIGATION_BLOG"
  | "NAVIGATION_CONTACT";

export default function HamburgerMenu({ links }: THamburgerMenu) {
  const ref = useRef<HTMLButtonElement>(null);
  const t = useTranslations();

  const [isOpen, [, close, toggle]] = useOpen();
  useOutsideOnClick(ref, close);
  useHideBodyScrollbar(isOpen);
  useKey("Escape", close);

  const topAnimationState = isOpen ? "topEnd" : "topStart";
  const bottomAnimationState = isOpen ? "bottomEnd" : "bottomStart";

  return (
    <Section className="relative w-fit sm:hidden">
      <button
        className="relative flex h-6 w-6 items-center justify-center rounded-lg"
        onClick={toggle}
        ref={ref}
      >
        <Line
          variants={rotation}
          initial="topStart"
          animate={topAnimationState}
        />
        <Line
          variants={rotation}
          initial="bottomStart"
          animate={bottomAnimationState}
        />
      </button>
      {isOpen && (
        <ReactFocusLock>
          <Section className="absolute right-0 top-10 w-48 rounded-xl border border-zinc-300 bg-white p-1 shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            {links.map(({ Icon, href, label }, index) => (
              <Tab
                key={index}
                className="flex w-full gap-3 !text-xs"
                href={href}
                onClick={close}
              >
                <Icon className="size-4" />{" "}
                {t(`NAVIGATION_${label.toUpperCase()}` as TLink)}
              </Tab>
            ))}
          </Section>
        </ReactFocusLock>
      )}
    </Section>
  );
}

const Line: FC<MotionProps> = (props) => (
  <Motion
    className="absolute h-[2px] w-full rounded-sm bg-zinc-950 dark:bg-white"
    {...props}
  />
);
