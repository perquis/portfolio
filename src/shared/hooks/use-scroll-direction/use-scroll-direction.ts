"use client";

import { useCallback, useLayoutEffect, useState } from "react";

import { usePathname } from "@/libs/next-intl";
import { useEventCallback } from "@/shared/hooks";

type Position = "x" | "y";

export default function useScrollDirection(position: Position = "y") {
  const [direction, setDirection] = useState(position === "y" ? "up" : "left");
  const [lastScroll, setLastScroll] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setCurrentPos(window[position === "y" ? "scrollY" : "scrollX"]);

    if (currentPos > lastScroll) {
      setDirection(position === "y" ? "down" : "right");
    } else {
      setDirection(position === "y" ? "up" : "left");
    }

    setLastScroll(currentPos <= 0 ? 0 : currentPos);
  }, [currentPos, lastScroll, position]);

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDirection(position === "y" ? "up" : "left");
    window.scrollTo(0, 0);
  }, [position, pathname]);

  useEventCallback({
    callback: handleScroll,
    eventName: "scroll",
  });

  return direction;
}
