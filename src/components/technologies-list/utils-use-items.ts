import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import type { Technology } from "@/shared/ui";

type Item = ComponentProps<typeof Technology>;

export const useItems = (): Item[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = useTranslations();

  return [
    {
      icon: "Jsx",
      name: "React",
      content: "home_skills_technologies_react",
    },
  ];
};