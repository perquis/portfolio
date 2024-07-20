import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

import { Ratio, Regular, Section, Title } from "@/shared/ui";

type ImageProps = Pick<ComponentProps<typeof Ratio>, "src" | "alt">;
type NextLinkProps = ComponentProps<typeof Link>;

type ICard = {
  image: ImageProps;
  title: string;
  description: string;
  className?: string;
} & NextLinkProps;

export default function Card({ title, description, className, image, href }: ICard) {
  return (
    <Section className={clsx("gap-4", className)}>
      <Link href={href}>
        <Ratio resolution="16:9" className="overflow-hidden rounded-xl" {...image} />
      </Link>
      <Section className="gap-1">
        <Link href={href}>
          <Title level="h6">{title}</Title>
        </Link>
        <Regular className="text-base">{description}</Regular>
      </Section>
    </Section>
  );
}
