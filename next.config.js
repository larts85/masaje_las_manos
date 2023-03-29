/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default', 'en-US', 'es-AR', 'pt-br'],
    defaultLocale: 'default',
  },
  trailingSlash: true,
  reactStrictMode: true,
  localeDetection: false,
}

module.exports = nextConfig
