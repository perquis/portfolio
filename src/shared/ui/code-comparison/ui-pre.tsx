import type { PropsWithChildren } from "react";

export const Pre = ({ children }: PropsWithChildren) => (
  <pre className="h-full overflow-auto break-all !border-none bg-background !p-4 font-mono text-sm text-foreground">
    {children}
  </pre>
);
