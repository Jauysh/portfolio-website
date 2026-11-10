import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "0",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"} https://www.googletagmanager.com https://www.google-analytics.com https://telegram.org`,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: blob: https:",
      `connect-src 'self'${isProd ? "" : " ws: wss: http:"} https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net`,
      "frame-ancestors 'self' https://web.telegram.org https://*.telegram.org https://t.me https://*.t.me",
      "base-uri 'self'",
      "form-action 'self' mailto:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.100.36",
    "*.local",
    "192.168.*.*",
    "10.*.*.*",
  ],
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon",
      },
      {
        source: "/apple-touch-icon.png",
        destination: "/apple-icon",
      },
      {
        source: "/apple-touch-icon-precomposed.png",
        destination: "/apple-icon",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
