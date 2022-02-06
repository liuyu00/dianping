// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: '@import "~@/assets/scss/base.scss";'
      }
    }
  }
}
