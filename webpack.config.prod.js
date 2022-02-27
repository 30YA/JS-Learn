const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode :(development , production , none)
  mode: "production",
  entry: {
    script: "./src/script.js",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "./public"),
    // publicPath: "public/",
    // assetModuleFilename: "fonts/[name].[ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "siavash",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "styles/",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          publicPath: "./img/",
          outputPath: "img",
          filename: "[name][ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        },
      },
    ],
  },
};
