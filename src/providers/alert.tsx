"use client";

import {
  type ComponentProps,
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

import type { Nullable } from "@/interfaces/utility-types";
import { Alert } from "@/shared/ui";

type TAlertProvider = {
  alert: AlertOrNull;
  setAlert: (alert: AlertOrNull) => void;
};
type TAlertContext = Nullable<ComponentProps<typeof Alert>>;
type AlertOrNull = Nullable<TAlertContext>;

const AlertContext = createContext<Nullable<TAlertProvider>>(null);

export default function AlertProvider({ children }: PropsWithChildren) {
  const [alert, setAlert] = useState<AlertOrNull>(null);
  const clearAlert = useCallback(() => setAlert(null), []);

  useEffect(() => {
    const timeout = setTimeout(clearAlert, 10000);
    return () => clearTimeout(timeout);
  }, [alert, clearAlert]);

  const value = useMemo(() => ({ alert, setAlert }), [alert]);

  return (
    <AlertContext.Provider value={value}>
      {children}
      {alert &&
        createPortal(
          <Alert {...alert} close={close} />,
          document.getElementById("alerts")!,
        )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext)!;
