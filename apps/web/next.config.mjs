/** @type {import('next').NextConfig} */
const nextConfig = {
  // So Next transpiles TypeScript from workspace packages (no separate build step needed)
  transpilePackages: ['@repo/server', '@repo/db', '@repo/config']
};
export default nextConfig;
