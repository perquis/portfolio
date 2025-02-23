"use client";

import clsx from "clsx";
import Image from "next/legacy/image";
import type { ComponentProps } from "react";

import type { Resolution } from "@/interfaces/variants";

import { getAspectRatio } from "./get-aspect-ratio";

type TImage = {
  resolution: Resolution;
  src: string;
  alt: string;
} & ComponentProps<"div">;

export default function Ratio({
  src,
  alt,
  className = "w-full",
  resolution,
  ...props
}: TImage) {
  const style = getAspectRatio(resolution);

  return (
    <div className={clsx("relative", className)} style={style} {...props}>
      <Image
        layout="fill"
        objectFit="cover"
        unoptimized
        priority
        src={src}
        alt={alt}
      />
    </div>
  );
}
