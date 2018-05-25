// scripts/webpack.js
const webpack = require('webpack')
const devWebpackConfig = require('react-scripts/config/webpack.config.dev')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  ...devWebpackConfig,
  resolve: {
    ...devWebpackConfig.resolve,
    alias: {
      ...devWebpackConfig.resolve.alias,
      '@': resolve('src')
    }
  }
};

webpack(config).run(function(err, stats) {
  if (err !== null) {
    console.log('done');
  } else {
    console.log(err);
  }
});
