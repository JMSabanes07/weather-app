/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    WEATHER_KEY: 'dc2f9741146e49f2880195624221203',
    API_ENDPOINT: 'https://api.weatherapi.com/v1',
  },
}

module.exports = nextConfig
