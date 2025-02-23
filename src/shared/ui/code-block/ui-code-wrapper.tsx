"use client";

import clsx from "clsx";
import { type ComponentProps, Fragment } from "react";

import type { IHighlightedCode } from "@/shared/packages";
import { CopyToClipboard, Section, SegmentedControl } from "@/shared/ui";
import { getVisibilityClass } from "@/shared/utils";

import { useCode } from "./provider-code-block";

type TSegmentedControl = ComponentProps<typeof SegmentedControl>;

type TCodeBlock = {
  controls: TSegmentedControl["controls"];
  snippets: IHighlightedCode[][];
};

export function CodeWrapper({ controls, snippets }: TCodeBlock) {
  const { selected } = useCode()!;

  return (
    <Section className="w-full gap-2">
      <SegmentedControl controls={controls} />
      {snippets.map(
        (_, index) =>
          selected === controls[index].name && (
            <Fragment key={crypto.randomUUID()}>
              {_.map(({ __html, theme }) => (
                <div
                  className={clsx(
                    "relative text-sm",
                    getVisibilityClass(theme),
                  )}
                  key={crypto.randomUUID()}
                >
                  <Section
                    layout={undefined}
                    dangerouslySetInnerHTML={{ __html }}
                  />
                  <CopyToClipboard code={__html} />
                </div>
              ))}
            </Fragment>
          ),
      )}
    </Section>
  );
}
