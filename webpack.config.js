const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const path = require('path')

module.exports = {
  entry: {
    scripts: './src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
//        {
//          loader: 'postcss-loader',
//          options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } } 
//        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    },
  ],
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: 'css/[id].css',
    }),
    new DashboardPlugin()
  ],
}