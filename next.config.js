const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack')
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      config.cache = false
      const threeMinifier = new ThreeMinifierPlugin()
      config.plugins.unshift(threeMinifier)
      config.resolve.plugins.unshift(threeMinifier.resolver)
    }
    return config
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({})
