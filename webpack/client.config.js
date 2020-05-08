path = require("path");

module.exports = {
  mode: "development",
  entry: "./modules/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
