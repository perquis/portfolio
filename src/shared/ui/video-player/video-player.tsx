/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppleNavbarLayout } from "@/shared/ui";
import type { SafariProps } from "@/shared/ui/safari/safari";

export default function VideoPlayer({
  src,
  url = "youtube.com",
  width = 1203,
  height = 52,
  ...props
}: SafariProps) {
  return (
    <AppleNavbarLayout url={url} {...props}>
      <iframe
        src={src}
        className="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </AppleNavbarLayout>
  );
}
