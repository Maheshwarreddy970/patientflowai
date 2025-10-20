/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // ✅ allow Cloudinary images
  },
  serverActions: {
    bodySizeLimit: "1mb",
  },
  output: "standalone", // optional, but good for deployment
};

export default nextConfig;
