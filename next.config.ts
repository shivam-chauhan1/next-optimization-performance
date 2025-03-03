import withBundleAnalyzerImport from "@next/bundle-analyzer";
const withBundleAnalyzer = withBundleAnalyzerImport({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["dummyjson.com", "cdn.dummyjson.com"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
