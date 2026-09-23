import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  return {
    distDir: isDev ? '.next-dev' : '.next',
    output: 'standalone',
    images: {
      formats: ['image/avif', 'image/webp'],
    },
  }
}

export default nextConfig

