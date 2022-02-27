const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  // mode :(development , production , none)
  mode: "development",
  entry: {
    script: "./src/script.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public"),
    // publicPath: "public/",
    // assetModuleFilename: "fonts/[name].[ext]",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    open: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "siavash",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"],
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
    ],
  },
};
