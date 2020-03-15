const Koa = require("koa");
const KoaRouter = require('koa-router')
const cors = require('koa2-cors')

const app = new Koa();
const router = new KoaRouter()

// 解决跨域问题
app.use(cors({
  origin: [],
  credentials: true
}))

// app.use(async (ctx, next) => {
//   ctx.body = 'index'
//   await next()
// })

const pet = require('./controller/pet')

router.use('/pet', pet.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server is running at 3000...");
});

module.exports = app