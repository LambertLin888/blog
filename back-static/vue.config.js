module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:1002',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
