import * as Sequelize from 'sequelize'

interface UserAttributesInput {
    id?: string
    email: string
    created_at?: string
    updated_at?: string
    deleted_at?: string
}

interface UserAttributesOutput {
    id: string
    email: string
    created_at: string
    updated_at: string
    deleted_at?: string
}

type UserInstance = Sequelize.Instance<UserAttributesOutput> & UserAttributesOutput

export default (sequelize: Sequelize.Sequelize) =>
    sequelize.define<UserInstance, UserAttributesInput>('user', {
        id: {type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4},
        email: {type: Sequelize.STRING, unique: true, allowNull: false}
    })
