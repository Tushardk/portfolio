// vue.config.js
module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/profile/'
    : '/',
  filenameHashing: false,

  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Tushar Kshirsagar | kshirsagartd@gmail.com | +919503789589 | Front End/UI Developer';
        return args;
      });
  },
  module: {
    rules: [
      {
        test: /package\.json$/,
        loader: 'package-json-cleanup-loader',
        options: {
          only: ['version', 'name', 'otherParam']
        }
      }
    ]
  }
}