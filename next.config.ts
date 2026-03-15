import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2il6osz49gpup.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
