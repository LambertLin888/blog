module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:10002',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
