const Router = require('koa-router')
const router = new Router()

router.get('/healthProject', async ctx => {
    ctx.body = '宠物健康项目列表'
})

module.exports = router