// Setup module search paths to root. Makes it possible to require modules relative to project root
process.env.NODE_PATH = __dirname // eslint-disable-line
require('module').Module._initPaths()

import startApp from 'app'
import db, {sequelize} from 'db'

async function init() {
    await sequelize.sync()
    const user = await db.user.findOne({raw: true, where: {email: 'rene@fjandin.com'}})
    console.dir(user)
    startApp()
}

init()
