const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/.nojekyll',
          to: '.nojekyll'
        },
        {
          from: 'public/favicon*.png',
          to: '[name][ext]'
        },
        {
          from: 'public/apple-touch-icon.png',
          to: 'apple-touch-icon.png'
        },
        {
          from: 'public/android-chrome-*.png',
          to: '[name][ext]'
        },
        {
          from: 'public/site.webmanifest',
          to: 'site.webmanifest'
        }
      ]
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
