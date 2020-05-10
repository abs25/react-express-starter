import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import webpack from "webpack";
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

const webpackConfig: webpack.Configuration = {
  mode: "development",
  entry: "./modules/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Express Starter ",
      template: "./modules/index.html",
    }),
    new CircularDependencyPlugin({
      failOnError: true,
      allowAsyncCycles: false,
      exclude: /dist|.yarn/,
      cwd: process.cwd(),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8000,
    hot: true,
    publicPath: "/",
    contentBase: path.join(__dirname, "../dist/"),
    proxy: {
      "/something": "http://localhost:8001",
    },
  },
};

export default webpackConfig;
