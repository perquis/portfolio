import React from "react";

import type { links } from "@/data";
import { Link, Section } from "@/shared/ui";

type TBreadcrumb = (typeof links)[number];

export default function Breadcrumbs({ links }: Record<"links", TBreadcrumb[]>) {
  return (
    <Section className="!flex-row gap-2">
      {links.map(({ label, href }, i) => (
        <React.Fragment key={i}>
          <Link href={href}>{label}</Link>
          {i < links.length - 1 && <Dash />}
        </React.Fragment>
      ))}
    </Section>
  );
}

const Dash = () => (
  <span className="block w-5 text-center text-zinc-500">/</span>
);
