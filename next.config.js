/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "http://Yoonyesol.github.io/roulette"
      : "",
};

module.exports = nextConfig;
