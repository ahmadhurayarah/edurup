/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable the default Image Optimization
  },
};

export default nextConfig;
