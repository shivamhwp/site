import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = withMDX({
  // Produce a fully static export
  output: "export",
  images: {
    // When using static export, Next.js image optimization is disabled.
    // We still declare remote patterns to allow <Image> with remote sources.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "61izvpe5ob.ufs.sh",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
});

export default nextConfig;
