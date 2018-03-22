import * as pino from 'pino'

const pretty = pino.pretty({forceColor: true})

pretty.pipe(process.stdout)

const logger = pino(
    {
        name: 'api',
        level: process.env.LOG_LEVEL || 'debug'
    },
    pretty
)

export default logger
