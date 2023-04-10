/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'es-AR', 'pt-BR'],
    defaultLocale: 'es-AR',
    // localeDetection: false,
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
