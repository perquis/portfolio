import { LayoutGroup } from "framer-motion";
import type { JSX, PropsWithChildren } from "react";
import { Children, Fragment, isValidElement } from "react";

import { Divider, Footer, Section } from "@/shared/ui";

export default function Layout({ children }: PropsWithChildren) {
  const extractedChildren = Children.toArray(children).filter(
    (Child) =>
      isValidElement(Child) &&
      typeof Child.type === "function" &&
      (Child as JSX.Element).type(Child.props),
  );

  const pageComponents = [
    ...extractedChildren,
    <Footer key={crypto.randomUUID()} />,
  ];

  return (
    <LayoutGroup id={crypto.randomUUID()}>
      <Section className="gap-10">
        {pageComponents.map((Child) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              {isValidElement(Child) && Child}
              {Child !== pageComponents.at(-1) ? <Divider /> : null}
            </Fragment>
          );
        })}
      </Section>
    </LayoutGroup>
  );
}
