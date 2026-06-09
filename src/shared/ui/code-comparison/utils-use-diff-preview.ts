import { useEffect, useMemo, useState } from "react";
import { codeToHtml } from "shiki";

import { useSelectedTheme } from "@/libs/next-themes";
import { useInteractiveActions } from "@/shared/hooks";

import { useCodeComparisonContext } from "./provider-code-comparison";

export type HighlightedCode = [before: string, after: string];

const loadTheme = (name: string) =>
  name === "dark"
    ? import("@/shared/themes/expo-dark.json")
    : import("@/shared/themes/expo-light.json");

export const useDiffPreview = () => {
  const themeName = useSelectedTheme(),
    { language: lang, beforeCode, afterCode } = useCodeComparisonContext()!,
    [status, actions] = useInteractiveActions();

  const [highlighted, setHighlighted] = useState([beforeCode, afterCode]);
  const deps = useMemo(() => ({ lang, themeName }), [lang, themeName]);

  useEffect(() => {
    actions.setLoading();

    loadTheme(deps.themeName)
      .then((mod) => {
        const theme = JSON.parse(JSON.stringify(mod.default)) as object;
        return Promise.all([
          codeToHtml(beforeCode, { lang: deps.lang, theme }),
          codeToHtml(afterCode, { lang: deps.lang, theme }),
        ]);
      })
      .then(setHighlighted)
      .then(actions.setSuccess)
      .catch(actions.setError);

    return actions.resetStatus;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  return {
    highlighted,
    status,
  };
};
