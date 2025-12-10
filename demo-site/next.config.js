/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Falls du einen Base-Path brauchst (z.B. wenn nicht im Root deployed)
  // basePath: '/lesewelt',
  images: {
    unoptimized: true, // Erforderlich für statischen Export
  },
}

module.exports = nextConfig
