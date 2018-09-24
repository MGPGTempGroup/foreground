module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'element-ui': 'Element'
    }
  },devServer: {
		host: '0.0.0.0'
	}
}