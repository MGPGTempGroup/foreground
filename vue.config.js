module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'element-ui': 'Element',
      'google-map': 'google'
    }
  },devServer: {
		host: '0.0.0.0'
	}
}