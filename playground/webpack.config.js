const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    historyApiFallback: {
      index: "/index.html",
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
