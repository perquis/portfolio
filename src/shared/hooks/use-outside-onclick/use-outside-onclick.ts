"use client";

import type { MouseEvent, RefObject } from "react";
import { useCallback, useEffect, useState } from "react";

import { useEventCallback } from "@/shared/hooks";

const useOutsideOnClick = <T extends Element | null>(
  ref: RefObject<T>,
  close: () => void,
) => {
  const [isOutsideElement, setIsOutsideElement] = useState(false);

  const callback = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement,
        tagName = target.tagName?.toLowerCase();

      if (tagName === "button" || tagName === "a" || tagName === "img") return;

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOutsideElement(true);
      } else {
        setIsOutsideElement(false);
      }
    },
    [ref],
  );

  useEffect(() => {
    if (isOutsideElement) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOutsideElement(false);
      return close();
    }

    return;
  }, [isOutsideElement, close, setIsOutsideElement]);

  useEventCallback({ eventName: "click", callback });

  return isOutsideElement;
};

export default useOutsideOnClick;
