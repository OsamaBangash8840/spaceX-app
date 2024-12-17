import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: [
    //   "farm3.staticflickr.com",
    //   "farm5.staticflickr.com",
    //   "farm9.staticflickr.com",
    //   // "i.imgur.com", 
    // ],
    remotePatterns:[
      {
        protocol: "https",
        hostname: "**",
      }
    ]
  },
};

export default nextConfig;
