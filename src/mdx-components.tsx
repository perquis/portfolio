import type { MDXComponents } from "mdx/types";
import Zoom from "react-medium-image-zoom";

import * as externalComponents from "@/shared/ui";

export const useMDXComponents = (components: MDXComponents) => ({
  p: externalComponents.Paragraph,
  ...components,
  ...externalComponents,
  Zoom,
});
