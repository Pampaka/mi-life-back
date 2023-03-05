import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.DB_HOST || 'localhost',
			port: Number(process.env.DB_PORT) || 5432,
			username: process.env.DB_USER || 'mi-life',
			password: process.env.DB_PASS || 'root',
			database: process.env.DB_NAME || 'mi-life',
			models: [],
			autoLoadModels: true
		})
	]
})
export class AppModule {}
