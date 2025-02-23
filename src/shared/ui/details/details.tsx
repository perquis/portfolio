import Link from "next/link";
import { type ComponentProps, type FC, Fragment } from "react";
import { match } from "ts-pattern";

import { LinkOut } from "@/shared/icons/generals";
import { Badge, Regular, Section } from "@/shared/ui";

interface IDetails {
  items: IItem[];
}

export default function Details({ items }: IDetails) {
  return (
    <Section className="overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Section>
  );
}

interface IItem {
  type?: "text" | "link" | "badge";
  href?: string;
  label: string;
  content: string;
}

const Item: FC<IItem> = ({ type, href, label, content }) => {
  const html = match(type)
    .with("link", () => (
      <Label>
        <Link
          target="_blank"
          rel="noopenner noreferrer nofollow"
          className="flex items-center gap-2 !text-sm text-indigo-600 hover:!underline focus-visible:!underline dark:text-indigo-400"
          href={href ?? ""}
        >
          {content} <LinkOut width={12} height={12} />
        </Link>
      </Label>
    ))
    .with("badge", () => (
      <Label>
        <Badge color="indigo" rounded="full">
          {content}
        </Badge>
      </Label>
    ))
    .otherwise(() => (
      <Regular className="block px-4 py-3.5 !text-sm font-medium !text-zinc-800 dark:!text-zinc-200">
        {content.split("\n").map((v) => (
          <Fragment key={v}>
            {v}
            <br />
          </Fragment>
        ))}
      </Regular>
    ));

  return (
    <Section className="items-start border-b border-zinc-200 last:border-b-0 dark:border-zinc-800 sm:!flex-row">
      <Regular className="block min-w-40 px-4 py-3.5 !text-sm font-medium">
        {label}
      </Regular>
      {html}
    </Section>
  );
};

const Label: FC<ComponentProps<"div">> = ({ children, ...props }) => (
  <div className="px-4 py-3.5" {...props}>
    {children}
  </div>
);
