import * as Sequelize from 'sequelize'

interface UserAttributes {
    id?: string
    email: string
    created_at?: string
    updated_at?: string
    deleted_at?: string
}

type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) =>
    sequelize.define<UserInstance, UserAttributes>('user', {
        id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
        email: {type: DataTypes.STRING, unique: true, allowNull: false}
    })
