module.exports = {
  reactHotLoader: true,
  modifyWebpackConfig: baseConfig => {
    const config = Object.assign({}, baseConfig);

    config.module.rules.push({
      test: /\.jsx?$/,
      include: /node_modules/,
      use: ['react-hot-loader/webpack'],
    });

    return config;
  },
};
