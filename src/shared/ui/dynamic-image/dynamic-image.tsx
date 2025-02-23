import clsx from "clsx";

import type { Resolution } from "@/interfaces/variants";
import Ratio from "@/shared/ui/ratio/ratio";
import { getVisibilityClass } from "@/shared/utils";

type TDynamicImage = {
  lightUrl: string;
  darkUrl: string;
  alt: string;
  resolution: Resolution;
  className?: string;
};

export default function DynamicImage({
  lightUrl,
  darkUrl,
  alt,
  resolution,
  className = "overflow-hidden rounded-lg",
}: TDynamicImage) {
  return (
    <div className="relative w-full">
      <Ratio
        className={clsx(getVisibilityClass("light"), className)}
        src={lightUrl}
        alt={alt}
        resolution={resolution}
      />
      <Ratio
        className={clsx(getVisibilityClass("dark"), className)}
        src={darkUrl}
        alt={alt}
        resolution={resolution}
      />
    </div>
  );
}
