"use client";

import { cn } from "@/libs/utils";
import { DotPattern } from "@/shared/ui";

export default function BackgroundScene() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 -z-50 flex h-screen w-full justify-between">
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(960px_circle_at_top,white,transparent)]",
          )}
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}
