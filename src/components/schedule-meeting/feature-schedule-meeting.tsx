"use client";

import CalComWidget, { getCalApi } from "@calcom/embed-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import {
  useHideBodyScrollbar,
  useKey,
  useOpen,
  useOutsideOnClick,
} from "@/shared/hooks";
import { RainbowButton } from "@/shared/ui";

export const ScheduleMeeting = () => {
  const [isOpen, [open, close]] = useOpen();
  const t = useTranslations();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: process.env.NEXT_PUBLIC_CALCOM_NAMESPACE!,
      });

      cal("ui", {
        styles: {
          branding: {
            brandColor: "#000000",
          },
        },
      });
    })();
  }, []);

  const calComRef = useRef<HTMLDivElement>(null);

  useKey("Escape", close);
  useHideBodyScrollbar(isOpen);
  useOutsideOnClick(calComRef, close);

  if (process.env.NEXT_PUBLIC_CONTACT_FORM === "true") return null;

  return (
    <>
      <RainbowButton
        onClick={open}
        data-test-id="schedule-meeting"
        className="!rounded-lg !px-4 !py-2 text-xs"
      >
        {t("HOME_HERO_BUTTON_MEETING")}
      </RainbowButton>
      {isOpen &&
        createPortal(
          <div className="pointer-events-auto flex h-full w-full items-center justify-center bg-zinc-950/75 backdrop-blur-lg dark:bg-white/5 sm:p-5">
            <div
              className="max-h-screen w-full max-w-[1080px] overflow-y-auto"
              ref={calComRef}
            >
              <CalComWidget
                namespace={process.env.NEXT_PUBLIC_CALCOM_NAMESPACE!}
                calLink={process.env.NEXT_PUBLIC_CALCOM_LINK!}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>,
          document.getElementById("cal-com-widget")!,
        )}
    </>
  );
};
