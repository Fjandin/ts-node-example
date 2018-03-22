import * as Sequelize from 'sequelize'

import user from 'db/models/user'

export const sequelize = new Sequelize('appDb', '', '', {
    dialect: 'sqlite',
    storage: './appDb.sqlite',
    logging: false,
    operatorsAliases: false,
    define: {
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        underscored: true,
        underscoredAll: true,
        charset: 'utf8'
    }
})

export default {
    user: user(sequelize)
}
