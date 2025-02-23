"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { useOpen } from "@/shared/hooks";
import { Checkmark, Clipboard } from "@/shared/icons/generals";
import { Tooltip } from "@/shared/ui";

interface ICopyToClipboard {
  code: string;
  className?: string;
}

export default function CopyToClipboard({ code, className }: ICopyToClipboard) {
  const [isCopied, [copied, clear]] = useOpen();
  const Icon = isCopied ? Checkmark : Clipboard;
  const t = useTranslations();

  const copy = () => {
    const container = document.createElement("div");
    container.innerHTML = code;
    const text = container.textContent!;

    navigator.clipboard.writeText(text);
    copied();
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        clear();
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied, clear]);

  return (
    <Tooltip
      label={
        isCopied
          ? t("COPY_TO_CLIPBOARD_SUCCESSFULLY")
          : t("COPY_TO_CLIPBOARD_IDDLE")
      }
      className={clsx("!absolute right-2 top-2 !hidden md:!flex", className)}
    >
      <button
        className={clsx(
          "rounded p-2 text-zinc-400 transition-colors duration-100 ease-in-out hover:text-zinc-500 focus-visible:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-500 dark:focus-visible:text-zinc-500",
          isCopied && "!text-emerald-500",
          "disabled:cursor-not-allowed",
          "relative",
          className,
        )}
        onClick={copy}
        disabled={isCopied}
      >
        <Icon width={20} height={20} />
      </button>
      {isCopied && (
        <>
          <video
            width={128}
            height={128}
            autoPlay
            muted
            src="/static/effects/confetti.webm"
            className="pointer-events-none absolute -left-12 -top-12 h-32 w-max max-w-32"
          />
          <audio src="/static/effects/sound-button.mp3" autoPlay />
        </>
      )}
    </Tooltip>
  );
}
