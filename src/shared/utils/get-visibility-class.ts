import clsx from "clsx";

import type { Theme } from "@/interfaces/theme";

export const getVisibilityClass = (theme: Theme) =>
  clsx(
    theme === "dark" && "hidden dark:block",
    theme === "light" && "dark:hidden",
  );
