module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html'
    },
    introduction: {
      entry: './src/introduction.js',
      template: './public/introduction.html'
    }
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'element-ui': 'Element'
    }
  }
}