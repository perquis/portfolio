"use client";

import { type FC, Fragment, useState } from "react";

import { DetailsBox } from "@/components/services-list/ui-details-box";
import { Link } from "@/libs/next-intl";
import { Chip, Regular, Section } from "@/shared/ui";

export interface Chip {
  label: string;
  description: string;
}

interface IItem {
  title: string;
  chips: Chip[];
}

type TList = {
  items: IItem[];
};

export const List: FC<TList> = ({ items }) => {
  const [selected, setSelected] = useState<Chip>(items?.[0]?.chips?.[0]);

  return (
    <>
      {items.map(({ title, chips }, index) => (
        <Section key={index} className="gap-2">
          <Regular className="!text-zinc-950 dark:!text-white">{title}</Regular>
          <Section className="!flex-row flex-wrap gap-3">
            {chips.map(({ label, ...rest }) => {
              const isActive = selected.label === label;

              return (
                <Fragment key={crypto.randomUUID()}>
                  <Chip
                    className="hidden lg:block"
                    onClick={() => setSelected({ label, ...rest })}
                    isActive={isActive}
                    disabled={isActive}
                  >
                    {label}
                  </Chip>
                  <Link href="#description" className="lg:hidden">
                    <Chip
                      onClick={() => setSelected({ label, ...rest })}
                      isActive={isActive}
                      disabled={isActive}
                    >
                      {label}
                    </Chip>
                  </Link>
                </Fragment>
              );
            })}
          </Section>
        </Section>
      ))}

      <DetailsBox selected={selected} />
    </>
  );
};
