module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'element-ui': 'Element',
      'google-map': 'google'
    }
  }
}