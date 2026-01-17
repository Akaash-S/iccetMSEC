import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "nielit.gov.in",
      },
      {
        protocol: "https",
        hostname: "www.niot.res.in",
      },
      {
        protocol: "https",
        hostname: "cdac.in",
      },
      {
        protocol: "https",
        hostname: "www.cdac.in",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
