import "@next/env";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "wrap" }]],
    remarkPlugins: [],
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  compiler: {
    removeConsole: {
      exclude: ["error", "warn", "log"],
    },
  },
  transpilePackages: ["next-mdx-remote", "shiki", "geist"],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/in",
        destination: String(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL),
        permanent: true,
      },
      {
        source: "/gh",
        destination: String(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL),
        permanent: true,
      },
      {
        source: "/x",
        destination: String(process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL),
        permanent: true,
      },
      {
        source: "/onboarding",
        destination: String(process.env.GOOGLE_FORM_URL),
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' app.cal.com unpkg.com;
              img-src *;
              frame-src 'self' www.youtube.com cal.com app.cal.com *.codesandbox.io;
              style-src 'self' 'unsafe-inline';
              font-src 'self';
              connect-src 'self' cdn.jsdelivr.net unpkg.com lottie.host github-contributions-api.jogruber.de;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
              upgrade-insecure-requests;
              block-all-mixed-content;`.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default withMDX(withNextIntl(nextConfig));
