const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: [['env', { modules: false, targets: { node: 4 } }]],
          },
        },
      },
      {
        test: /\.(jpe?g|pgn|gif|svg)$/i,
        loader: 'url-loader?limit=65536',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: '[name]-[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      hash: true,
    }),
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
    new CopyWebpackPlugin([{ from: './public/favicon.ico', to: './favicon.ico' }]),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
