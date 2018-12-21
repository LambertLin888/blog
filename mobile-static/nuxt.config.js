const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "lambert's blog",
    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'linbenjian,博客,前端,blog'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'styleshert',
        href: 'http://at.alicdn.com/t/font_976502_yo7yecib2zi.css'
      }
    ],
    script: [{ src: '/rem.js' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['mint-ui/lib/style.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/mint-ui'],

  /*
  ** loader
  */
  loader: [
    {
      test: /\.less$/,
      loaders: 'style-loader!css-loader!less-loader'
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  **
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8011'
  },
  /*
  **
  */
  dev: process.env.NODE_ENV !== 'production',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.devtool = '#source-map'
      }
    }
  }
}
