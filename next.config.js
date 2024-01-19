/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://roulette.timeqlife.com"
      : "",
};

module.exports = nextConfig;
