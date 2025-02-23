import clsx from "clsx";
import { Fragment } from "react";

import { highlightCode } from "@/shared/packages";
import { CopyToClipboard } from "@/shared/ui";
import { getVisibilityClass } from "@/shared/utils";

/**
 * You can visit examples here https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/src/app/rsc/page.tsx.
 */
export default async function Code({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const renderedCodeHtml = await highlightCode(code);

  return (
    <div className="relative">
      {renderedCodeHtml.map(({ __html, theme }, i) => (
        <Fragment key={i}>
          <div
            className={clsx(
              "w-full text-sm",
              getVisibilityClass(theme),
              className,
            )}
            dangerouslySetInnerHTML={{
              __html,
            }}
          />
          <CopyToClipboard
            className={getVisibilityClass(theme)}
            code={__html}
          />
        </Fragment>
      ))}
    </div>
  );
}
