"use client";

import {
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import type { Nullable } from "@/interfaces/utility-types";

interface ICommandMenuContext {
  searchQuery: string;
  setSearchQuery: (search: string) => void;
}

const CommandMenuContext = createContext<Nullable<ICommandMenuContext>>(null);

export const CommandMenuProvider = ({ children }: PropsWithChildren) => {
  const [searchQuery, setSearchQuery] = useState("");
  const value = useMemo(
    () => ({ searchQuery, setSearchQuery }),
    [searchQuery, setSearchQuery],
  );

  return (
    <CommandMenuContext.Provider value={value}>
      {children}
    </CommandMenuContext.Provider>
  );
};

export const useCommandMenu = () => useContext(CommandMenuContext)!;
