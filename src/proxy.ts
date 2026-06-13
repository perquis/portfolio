import { chain } from "@nimpl/middleware-chain";

import { withNextIntl, withXFramePathname } from "@/middlewares";

export default chain([withNextIntl, withXFramePathname]);

export const config = {
  matcher: ["/", "/(en|pl)/:path*"],
};
