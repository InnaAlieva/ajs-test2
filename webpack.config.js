<<<<<<< HEAD
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
=======

const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
>>>>>>> 5e7c056 (Initial commit)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
<<<<<<< HEAD
          loader: "babel-loader",
=======
          loader: 'babel-loader',
>>>>>>> 5e7c056 (Initial commit)
        },
      },
      {
        test: /\.html$/,
        use: [
          {
<<<<<<< HEAD
            loader: "html-loader",
=======
            loader: 'html-loader',
>>>>>>> 5e7c056 (Initial commit)
          },
        ],
      },
      {
<<<<<<< HEAD
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
=======
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
>>>>>>> 5e7c056 (Initial commit)
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
<<<<<<< HEAD
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./style.css",
      chunkFilename: "[id].css",
    }),
=======
      template: './src/index.html',
      filename: './index.html',
    })
>>>>>>> 5e7c056 (Initial commit)
  ],
};
