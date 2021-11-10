const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env) => {
  return {
    entry: "./src/index.ts",
    mode: env.production ? "production" : "developent",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        name: "Path",
        type: "umd",
      },
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
          exclude: /node_modules/,
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [new VueLoaderPlugin()],
  };
};
