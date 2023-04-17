/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'es-AR', 'pt-BR'],
    defaultLocale: 'es-AR',
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
