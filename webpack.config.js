const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env) => {
  return {
    entry: "./src/index.ts",
    mode: env.production ? "production" : "development",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        name: "Trip",
        type: "umd",
      },
      libraryExport: "default",
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
      alias: {
        vue: "/node_modules/vue/dist/vue.runtime.esm-bundler.js",
      },
    },
    plugins: [new VueLoaderPlugin()],
  };
};
