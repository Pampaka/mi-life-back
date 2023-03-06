import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

interface UserCreationAttributes {
	email: string
	login: string
	password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
	@ApiProperty({
		example: 'a7a3ffe2-6e96-4a87-8909-8342cd7c4c8c',
		description: 'Unique identifier'
	})
	@Column({
		type: DataType.UUID,
		unique: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
		primaryKey: true
	})
	id: string

	@ApiProperty({ example: 'email@email.com', description: 'Email' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email: string

	@ApiProperty({ example: 'Login', description: 'Login' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	login: string

	@ApiProperty({ example: 'Name Surname', description: 'User name' })
	@Column({ type: DataType.STRING })
	name: string

	@ApiProperty({ example: 'password', description: 'Password' })
	@Column({ type: DataType.STRING, allowNull: false })
	password: string
}
