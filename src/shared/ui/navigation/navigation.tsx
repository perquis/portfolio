"use client";

import { useTranslations } from "next-intl";
import type { ComponentProps, FC } from "react";

import { links } from "@/data";
import type { IsLock } from "@/interfaces/variants";
import { useScrollDirection } from "@/shared/hooks";
import type { Breadcrumbs } from "@/shared/ui";
import {
  Container,
  HamburgerMenu,
  Logo,
  Motion,
  Section,
  Tab,
} from "@/shared/ui";

export default function Navigation() {
  const direction = useScrollDirection("y");
  const lock = direction === "down";

  return (
    <Motion
      asChild="nav"
      transition={{ damping: 30, stiffness: 250 }}
      animate={direction === "up" ? { translateY: 0 } : { translateY: "-100%" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/50 bg-white/95 py-2 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/95"
    >
      <Container>
        <Section className="!flex-row items-center justify-between">
          <Logo lock={lock} />
          <Menu links={links} lock={lock} />
          <HamburgerMenu links={links} />
        </Section>
      </Container>
    </Motion>
  );
}

type TMenu = ComponentProps<typeof Breadcrumbs> & IsLock;

const Menu: FC<TMenu> = ({ links, lock }) => {
  const t = useTranslations();

  return (
    <Section className="hidden !flex-row gap-3 text-xs sm:flex">
      {links.map(({ href, label }) => (
        <Tab key={href} href={href} lock={lock}>
          {/* @ts-expect-error */}
          {t(`NAVIGATION_${label.toUpperCase()}`)}
        </Tab>
      ))}
    </Section>
  );
};
