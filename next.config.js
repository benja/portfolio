const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'ts', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
});
