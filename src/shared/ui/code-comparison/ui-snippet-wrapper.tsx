import { type PropsWithChildren } from "react";

import { StackIcon } from "@/shared/icons/programming-languages/stack-icon";

import { useCodeComparisonContext } from "./provider-code-comparison";

type SnippetWrapperProps = PropsWithChildren & { label: string };

export const SnippetWrapper = ({ children, label }: SnippetWrapperProps) => {
  const { filename, icon } = useCodeComparisonContext()!;

  return (
    <div className="grid grid-flow-row auto-rows-max md:block">
      <div className="flex items-center bg-accent px-4 py-2 text-sm text-foreground">
        <div className="flex items-center gap-2">
          <StackIcon name={icon} width={20} height={20} />
          {filename}
        </div>
        <span className="ml-auto">{label}</span>
      </div>
      {children}
    </div>
  );
};
