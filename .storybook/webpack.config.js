// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to 'React Create App'. This only has babel loader to load JavaScript.

const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /\.flow$/,
      include: /node_modules/,
      loader: 'null-loader'
    },
    {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    },
    {
      test: /gatsby\/cache-dir.*\.js$/,
      loader: require.resolve('babel-loader'),
    },
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('awesome-typescript-loader')
    },
    {
      test: /\.(scss|sass)$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../'),
      loaders: ['css-loader', 'sass-loader'],
    });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(
    '.flow',
    '.mjs',
    '.js',
    '.sass',
    '.scss',
    '.ts',
    '.tsx'
  );
  return config;
};
