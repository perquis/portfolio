import { useTranslations } from "next-intl";

import { InteractiveStatus } from "@/shared/hooks/use-interactive-actions/use-interactive-actions";

import { FormattedSnippetsCode } from "./ui-formatted-snippets-code";
import { Pre } from "./ui-pre";
import { SnippetWrapper } from "./ui-snippet-wrapper";
import { useDiffPreview } from "./utils-use-diff-preview";

export const BeforeAndAfterSnippets = () => {
  const t = useTranslations(),
    { highlighted, status } = useDiffPreview();

  if (status === InteractiveStatus.ERROR) return <></>;

  const getLabel = (key: number) =>
    key ? "CODE_COMPARISON_AFTER" : "CODE_COMPARISON_BEFORE";

  return (
    <div className="relative grid md:grid-cols-2 md:divide-x md:divide-border">
      {highlighted.map((__html, key) => (
        <SnippetWrapper label={t(getLabel(key))} key={key}>
          {status === InteractiveStatus.SUCCESS ? (
            <FormattedSnippetsCode dangerouslySetInnerHTML={{ __html }} />
          ) : (
            <Pre>{__html}</Pre>
          )}
        </SnippetWrapper>
      ))}
    </div>
  );
};
