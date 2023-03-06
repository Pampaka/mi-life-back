import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { User } from './users/users.model'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env'
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.DB_HOST || 'localhost',
			port: Number(process.env.DB_PORT) || 5432,
			username: process.env.DB_USER || 'mi-life',
			password: process.env.DB_PASS || 'root',
			database: process.env.DB_NAME || 'mi-life',
			models: [User],
			autoLoadModels: true,
			logging: false /* TODO change to loglevel */
		}),
		UsersModule
	]
})
export class AppModule {}
