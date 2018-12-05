/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:46:25
 * @modify date 2018-11-14 16:46:25
 * @desc 服务端入口
 */

const Koa = require("koa");
const json = require("koa-json");
const cors = require("koa-cors");
const consola = require("consola");
const bodyparser = require("koa-bodyparser");
const session = require("koa-session");
const api = require("./routes/api");

const app = new Koa();
const host = process.env.HOST || "127.0.0.1";

let port = 9001;
if (process.env.NODE_ENV == "production") {
  port = 9002;
}

// Import and Set Nuxt.js options
// let config = require("../front-static/nuxt.config.js");
// config.dev = !(app.env === "production");

async function start() {
  app.keys = ["some secret hurr"];
  app.use(session(app));
  app.use(
    bodyparser({
      enableTypes: ["json", "form", "text"]
    })
  );
  app.use(cors());
  app.use(json());
  app.use(api.routes(), api.allowedMethods());
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
