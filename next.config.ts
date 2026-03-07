import type { NextConfig } from "next";
import { REDIRECT_SECTIONS } from "./src/constants/sections";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    // Note: 'unsafe-inline' for scripts/styles is required for Next.js static
    // site generation (SSG). Nonce-based CSP requires server-side rendering.
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self' https://formspree.io https://challenges.cloudflare.com",
      "frame-src https://challenges.cloudflare.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [],
  },
  turbopack: {
    resolveAlias: {
      // Remove legacy polyfills — all target browsers (Chrome 100+, Firefox 100+,
      // Safari 15.4+) natively support Array.at, Object.hasOwn, Object.fromEntries, etc.
      "next/dist/build/polyfills/polyfill-module.js": "./src/empty-polyfill.js",
    },
  },
  async redirects() {
    return REDIRECT_SECTIONS.map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: false,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
