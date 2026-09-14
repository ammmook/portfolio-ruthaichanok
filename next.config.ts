import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** UI screenshots keep their fine text legible at 90; 75 stays for everything else. */
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/c575xluf/image/upload/**",
      },
      {
        /* Activity photos served straight from their Google Drive folder. */
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/d/**",
      },
    ],
  },
};

export default nextConfig;
