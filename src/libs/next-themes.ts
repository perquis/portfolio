import { useTheme } from "next-themes";

const useThemePreference = () => {
  const { theme, systemTheme } = useTheme();
  return theme === "system" ? systemTheme! : theme!;
};

export const useSelectedTheme = () => useThemePreference();
