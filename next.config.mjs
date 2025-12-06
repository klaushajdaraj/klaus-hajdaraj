/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is not your username.github.io, uncomment and set the basePath
  // For example, if your repo is username/repo-name, set basePath: '/repo-name'
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
