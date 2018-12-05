const Koa = require('koa')
const consola = require('consola')
const proxy = require('koa-proxy')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
let port = process.env.PORT || 8001
let serverHost = 'http://127.0.0.1:9001'
let isProduction = false
if (process.env.NODE_ENV == 'production') {
  port = 8002
  serverHost = 'http://127.0.0.1:9002'
  isProduction = true
}

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')
async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // if (!isProduction) {
  app.use(
    proxy({
      host: serverHost, // proxy alicdn.com...
      match: /^\/api\// // ...just the /static folder
    })
  )
  // }

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
