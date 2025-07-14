import {
  MarkdownPageSSR,
  generateMetadata as gm,
} from "@/components/markdawn-page-ssr/feature-markdown-page-ssr";

export { generateStaticParams } from "@/components/markdawn-page-ssr/feature-markdown-page-ssr";

export const generateMetadata = gm("projects");
export default MarkdownPageSSR("projects");
