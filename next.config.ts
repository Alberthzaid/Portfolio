import type { NextConfig } from "next";

// Former standalone pages now live as sections of the one-page home.
// Redirect sources match case-insensitively, so /projects and /PROJECTS are covered too.
const legacySections = [
  { path: "Projects", anchor: "building" },
  { path: "Certifications", anchor: "certifications" },
  { path: "Contact", anchor: "contact" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return legacySections.map(({ path, anchor }) => ({
      source: `/${path}`,
      destination: `/#${anchor}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
