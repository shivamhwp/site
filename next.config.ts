import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static export
  output: "export",
  images: {
    // Ensure images work with static export if used in the future
    unoptimized: true,
  },
};

export default nextConfig;
