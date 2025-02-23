import { useEffect, useMemo, useState } from "react";
import { codeToHtml } from "shiki";

import { useSelectedTheme } from "@/libs/next-themes";
import { useInteractiveActions } from "@/shared/hooks";

import { useCodeComparisonContext } from "./provider-code-comparison";

export type HighlightedCode = [before: string, after: string];

export const useDiffPreview = () => {
  const theme = useSelectedTheme(),
    { language: lang, beforeCode, afterCode } = useCodeComparisonContext()!,
    [status, actions] = useInteractiveActions();

  const [highlighted, setHighlighted] = useState([beforeCode, afterCode]),
    shikiOptions = useMemo(() => ({ lang, theme }), [lang, theme]);

  const beforeCodeHtml = codeToHtml(beforeCode, shikiOptions),
    afterCodeHtml = codeToHtml(afterCode, shikiOptions);

  const retrieveCodeComparisonAsync = Promise.all([
    beforeCodeHtml,
    afterCodeHtml,
  ]);

  useEffect(() => {
    actions.setLoading();

    retrieveCodeComparisonAsync
      .then(setHighlighted)
      .then(actions.setSuccess)
      .catch(actions.setError);

    return actions.resetStatus;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return {
    highlighted,
    status,
  };
};
