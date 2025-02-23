import type { ComponentProps } from "react";

import { highlightCode } from "@/shared/packages";
import type { Code, SegmentedControl } from "@/shared/ui";

import { CodeBlockProvider } from "./provider-code-block";
import { CodeWrapper } from "./ui-code-wrapper";

type TCode = ComponentProps<typeof Code>;
type TSegmentedControl = ComponentProps<typeof SegmentedControl>;

type TCodeBlock = {
  controls: TSegmentedControl["controls"];
  snippets: TCode[];
};

export default async function CodeBlock({ controls, snippets }: TCodeBlock) {
  const processedCodeSnippets = await Promise.all(
    snippets.map(async ({ code }) => await highlightCode(code)),
  );

  return (
    <CodeBlockProvider name={controls[0].name}>
      <CodeWrapper controls={controls} snippets={processedCodeSnippets} />
    </CodeBlockProvider>
  );
}
