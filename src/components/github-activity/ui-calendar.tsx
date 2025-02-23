"use client";

import { cloneElement, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

import type { Nullable } from "@/interfaces/utility-types";
import { useMounted } from "@/shared/hooks";
import { Chip, Section } from "@/shared/ui";

import { themeInput } from "./data-theme-colors";

export const Calendar = () => {
  const [selectedYear, setSelectedYear] = useState<Nullable<number>>(null),
    mounted = useMounted();

  if (!mounted) return null;

  const currentYear = new Date().getFullYear(),
    items = Array.from(
      { length: currentYear - 2020 + 1 },
      (_, i) => currentYear - i,
    ).sort((a, b) => a - b),
    years = [...items];

  return (
    <Section className="gap-5">
      <GitHubCalendar
        username="perquis"
        renderBlock={(block, activity) =>
          cloneElement(block, {
            tabIndex: -1,
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} contribution${activity.count > 1 ? "s" : ""} on ${activity.date}`,
          })
        }
        theme={themeInput}
        year={selectedYear ?? "last"}
      />

      <Section className="!flex-row flex-wrap gap-2">
        {years.map((year) => (
          <Chip
            className="!rounded !text-xs"
            isActive={selectedYear === year}
            onClick={() => setSelectedYear(year)}
            key={year}
          >
            {year}
          </Chip>
        ))}
      </Section>

      <ReactTooltip opacity={90} id="react-tooltip" />
    </Section>
  );
};
