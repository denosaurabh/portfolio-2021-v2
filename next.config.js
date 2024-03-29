module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'cdn.discordapp.com', 'horizon.io'],
  },
  webpack: (config, { dev, isServer }) => {
    // // Replace React with PReact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
