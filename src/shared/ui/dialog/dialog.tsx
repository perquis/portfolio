import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import ReactFocusLock from "react-focus-lock";

import { IconButton, Section } from "@/shared/ui";

const dialogRoot = document.getElementById("dialog");

interface IDialog {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
}

export const Dialog: FC<IDialog> = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-zinc-950/75 backdrop-blur-lg dark:bg-white/25 z-50 sm:p-5">
      <ReactFocusLock>
        <Section className="bg-white dark:bg-zinc-950 p-5 max-w-screen-sm h-screen sm:h-auto sm:rounded-2xl sm:shadow border border-zinc-200 dark:border-zinc-800 relative">
          <IconButton className="absolute top-5 right-5" size="medium" icon="Close" onClick={close} />
          {children}
        </Section>
      </ReactFocusLock>
    </div>,
    dialogRoot!,
  );
};