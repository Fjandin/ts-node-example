// Setup module search paths to root. Makes it possible to require modules relative to project root
process.env.NODE_PATH = __dirname // eslint-disable-line
require('module').Module._initPaths()

import startApp from 'app'
import db, {sequelize} from 'db'

async function init() {
    await sequelize.sync({force: true})
    await db.user.create({email: 'rene@fjandin.com'})
    const user = await db.user.findOne({raw: true, where: {email: 'rene@fjandin.com'}})
    console.dir(user && user.email.toLowerCase())
    startApp()
}

init()
