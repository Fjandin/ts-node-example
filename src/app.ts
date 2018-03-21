import * as Koa from 'koa'
import * as Router from 'koa-router'
import {token} from 'lib/utils'
import logger from 'lib/logger'

export const app = new Koa()

const router = new Router()

router.get('/ping', async (ctx, next) => {
    ctx.body = 'pong'
    await next()
})

router.get('/token', async (ctx, next) => {
    ctx.body = token(64)
    await next()
})

app.use(router.routes())

export default () => {
    app.listen(8080, () => {
        logger.info('Server started @ 8080')
    })
}
