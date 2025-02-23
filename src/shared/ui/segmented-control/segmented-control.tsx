"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Fragment } from "react";

import * as stacks from "@/shared/icons/programming-languages";
import { Section } from "@/shared/ui";
import { useCode } from "@/shared/ui/code-block/provider-code-block";

type IconName = keyof typeof stacks;

interface Control {
  icon: IconName;
  name: string;
}

type TSegmentedControl = Record<"controls", Control[]>;

export default function SegmentedControl({ controls }: TSegmentedControl) {
  const { selected, setSelected } = useCode()!;

  return (
    <Section className="relative w-fit !flex-row items-center gap-2 rounded-[10px] border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-950">
      {controls.map(({ name, icon }, index) => {
        const Icon = stacks[icon];
        const isAcive = selected === name;

        return (
          <Fragment key={index}>
            <button
              onClick={() => setSelected(name)}
              className={clsx(
                "relative flex items-center gap-2 rounded-md px-2 py-1.5",
                isAcive && "pointer-events-none",
              )}
              disabled={isAcive}
            >
              <Icon width={20} height={20} className="z-10" />{" "}
              <span className="z-10 select-none text-sm drop-shadow">
                {name}
              </span>
              {isAcive && (
                <motion.div
                  className="absolute left-0 right-0 top-0 h-full w-full rounded-md border border-zinc-300 bg-white shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900"
                  layoutId="control"
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
              )}
            </button>
            {controls.length - 1 !== index && (
              <div className="h-5 w-[1px] bg-zinc-300 dark:bg-zinc-800" />
            )}
          </Fragment>
        );
      })}
    </Section>
  );
}
