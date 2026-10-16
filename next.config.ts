import type { NextConfig } from "next";

const wordpressBaseUrl = process.env.WP_GRAPHQL_BASE_URL;

if (!wordpressBaseUrl) {
  throw new Error("Missing WP_GRAPHQL_BASE_URL");
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    remotePatterns: [
      new URL(
        "wp-content/uploads/**",
        `${wordpressBaseUrl.replace(/\/?$/, "/")}`,
      ),
    ],
  },
};

export default nextConfig;