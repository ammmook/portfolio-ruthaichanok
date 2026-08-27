import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** UI screenshots keep their fine text legible at 90; 75 stays for everything else. */
    qualities: [75, 90],
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
