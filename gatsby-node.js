const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~Card": path.resolve(__dirname, "src/components/Card"),
        "~data": path.resolve(__dirname, "src/data")
      }
    }
  });
};