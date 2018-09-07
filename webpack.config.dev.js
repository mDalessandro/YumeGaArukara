const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|pgn|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'public/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
    new CopyWebpackPlugin([{ from: './public/favicon.ico', to: './favicon.ico' }]),
    new CopyWebpackPlugin([{ from: './public/yumeColdUdon.jpg', to: './' }]),
    new CopyWebpackPlugin([{ from: './public/yumeHotUdon.jpg', to: './' }]),
    new CopyWebpackPlugin([{ from: './public/yumeJapaneseBlueLogo.png', to: './' }]),
    new CopyWebpackPlugin([{ from: './public/facebook.png', to: './' }]),
    new CopyWebpackPlugin([{ from: './public/instagram.png', to: './' }]),
    new CopyWebpackPlugin([{ from: './public/yelp.png', to: './' }]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
