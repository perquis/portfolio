"use client";

import { useQueryState } from "nuqs";
import type { FC } from "react";

import { Card } from "@/shared/ui";
import type { Metadata } from "@/shared/utils/get-metadata-list";

export const List: FC<Record<"items", Metadata[]>> = ({ items }) => {
  const [q] = useQueryState("q");

  return (
    <>
      {items
        .filter(({ title }) =>
          title.toLowerCase().includes(q?.toLowerCase() ?? ""),
        )
        .map((item) => (
          <Card key={item.slug} {...item} />
        ))}
    </>
  );
};
