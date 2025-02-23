import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import type { Theme } from "@/interfaces/theme";
import { theme as themes } from "@/shared/themes/theme";

export interface IHighlightedCode {
  __html: string;
  theme: Theme;
}

export async function highlightCode(code: string) {
  const codeSnippetArray: Theme[] = ["light", "dark"];

  const highlightedCodeOutput = await Promise.all(
    codeSnippetArray.map(async (theme) => ({
      __html: (
        await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypePrettyCode, {
            filterMetaString: (string) =>
              string.replace(/filename="[^"]*"/, ""),
            theme: theme === "light" ? themes.light : themes.dark,
            keepBackground: false,
            tokensMap: {
              fn: "entity.name.function",
            },
          })
          .use(rehypeStringify)
          .process(code)
      ).toString(),
      theme,
    })),
  );

  return highlightedCodeOutput;
}
