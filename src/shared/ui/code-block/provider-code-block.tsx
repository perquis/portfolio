"use client";

import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import type { Nullable } from "@/interfaces/utility-types";

type TCodeContext = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const CodeContext = createContext<Nullable<TCodeContext>>(null);

export function CodeBlockProvider({
  name,
  children,
}: PropsWithChildren & { name: string }) {
  const [selected, setSelected] = useState(name);

  return (
    <CodeContext.Provider value={{ selected, setSelected }}>
      {children}
    </CodeContext.Provider>
  );
}

export const useCode = () => useContext(CodeContext);
