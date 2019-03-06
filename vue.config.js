const path = require("path");
const projectRoot = path.resolve(__dirname);
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: './',
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  },
}
