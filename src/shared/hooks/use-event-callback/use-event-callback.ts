"use client";

import { useEffect } from "react";

type UseEventCallbackProps<T> = {
  eventName: keyof WindowEventMap;
  callback: (e: T) => void;
  active?: boolean;
};

type UseEventCallback = <T>({
  eventName,
  callback,
  active,
}: UseEventCallbackProps<T>) => void;

const useEventCallback: UseEventCallback = ({
  eventName,
  callback,
  active = true,
}) => {
  useEffect(() => {
    if (active) {
      window.addEventListener(eventName, callback as () => void);

      return () => {
        window.removeEventListener(eventName, callback as () => void);
      };
    }
  }, [eventName, callback, active]);
};

export default useEventCallback;
