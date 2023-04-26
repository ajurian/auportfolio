/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
    experimental: {
        runtime: "edge",
    },
};

module.exports = nextConfig;
