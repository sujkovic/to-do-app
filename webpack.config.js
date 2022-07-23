const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var moment = require('moment');
moment().format();

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'To Do',
    }),
  ],
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
  },
};