"use client";

import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { useTheme } from "next-themes";

import { useMounted } from "@/shared/hooks";
import { Moon, Sun } from "@/shared/icons/generals";
import { Section } from "@/shared/ui";

export const ToggleTheme = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const toggleTheme = () =>
    setTheme(
      theme === "system"
        ? systemTheme === "dark"
          ? "light"
          : "dark"
        : theme === "dark"
          ? "light"
          : "dark",
    );

  const isDarkMode =
      (theme === "system" && systemTheme === "dark") || theme === "dark",
    isLightMode = !isDarkMode;

  const isChecked =
    theme === "system" ? systemTheme === "dark" : theme === "dark";

  if (!mounted) return null;

  return (
    <Section className="!flex-row items-center gap-1">
      <Sun
        className={clsx(
          "transition-colors duration-200 ease-in-out",
          isDarkMode && "opacity-50",
        )}
        width={16}
        height={16}
      />
      <Switch
        checked={isChecked}
        onChange={toggleTheme}
        className={clsx(
          "group relative flex h-5 w-10 cursor-pointer rounded-full border p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-indigo-600",
          isLightMode ? "border-zinc-200" : "border-white/10",
          isLightMode ? "bg-white shadow-sm" : "bg-zinc-900",
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            "pointer-events-none inline-block size-2.5 translate-x-0 rounded-full shadow-lg ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5",
            isLightMode ? "bg-black" : "bg-white",
          )}
        />
      </Switch>
      <Moon
        className={clsx(
          "transition-colors duration-200 ease-in-out",
          isLightMode && "opacity-50",
        )}
        width={16}
        height={16}
      />
    </Section>
  );
};
