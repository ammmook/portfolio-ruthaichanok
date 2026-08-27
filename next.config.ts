import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avkiohcjeykmmtqklegg.supabase.co",
        pathname: "/storage/v1/object/public/my-portfolio-pictures/**",
      },
    ],
  },
};

export default nextConfig;
