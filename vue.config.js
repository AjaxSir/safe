const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static',
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@views', resolve('src/views'))
  },
  devServer: {
    host: 'localhost',
    port: 8080
  }
}
