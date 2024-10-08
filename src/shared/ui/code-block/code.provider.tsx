"use client";

import { type Dispatch, type PropsWithChildren, type SetStateAction, createContext, useContext, useState } from "react";

type TCodeContext = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const CodeContext = createContext<TCodeContext | null>(null);

export default function CodeProvider({ name, children }: PropsWithChildren & { name: string }) {
  const [selected, setSelected] = useState(name);

  return <CodeContext.Provider value={{ selected, setSelected }}>{children}</CodeContext.Provider>;
}

export const useCode = () => useContext(CodeContext);
