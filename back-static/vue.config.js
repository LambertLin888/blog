module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9001',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
