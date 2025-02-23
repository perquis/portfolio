"use client";

import clsx from "clsx";
import { type ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import ReactFocusLock, { type ReactFocusLockProps } from "react-focus-lock";
import { match } from "ts-pattern";

import type { Alignment } from "@/interfaces/variants";
import {
  useHideBodyScrollbar,
  useKey,
  useOutsideOnClick,
} from "@/shared/hooks";
import { IconButton, Section } from "@/shared/ui";

interface IDialog {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
  alignment?: Alignment;
  options?: ReactFocusLockProps<ReactNode, Record<string, any>>;
}

export default function Dialog({
  isOpen,
  close,
  alignment = "center",
  children,
  options,
}: IDialog) {
  const classes = match(alignment)
    .with("center", () => "justify-center items-center")
    .with("bottom", () => "justify-center items-end")
    .with("top", () => "justify-center items-start")
    .with("left", () => "justify-start items-center")
    .with("right", () => "justify-end items-center")
    .with("bottom-left", () => "justify-start items-end")
    .with("bottom-right", () => "justify-end items-end")
    .with("top-left", () => "justify-start items-start")
    .with("top-right", () => "justify-end items-start")
    .exhaustive();

  const dialogRef = useRef<HTMLDivElement>(null);

  useOutsideOnClick(dialogRef, close);
  useHideBodyScrollbar(isOpen);
  useKey("Escape", close);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed left-0 top-0 z-50 flex h-screen w-full bg-zinc-950/75 backdrop-blur-lg dark:bg-white/10 sm:p-5",
        classes,
      )}
    >
      <ReactFocusLock {...options}>
        <Section
          className="relative h-screen max-w-screen-sm border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:h-auto sm:rounded-2xl sm:shadow"
          ref={dialogRef}
        >
          <IconButton
            className="absolute right-3 top-3"
            size="medium"
            icon="Close"
            onClick={close}
          />
          {children}
        </Section>
      </ReactFocusLock>
    </div>,
    document.getElementById("dialog")!,
  );
}
