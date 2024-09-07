/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rs-motors-image-collection.s3.amazonaws.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  // basePath: "/rs_motors",
  // output: "export",
};

export default nextConfig;
