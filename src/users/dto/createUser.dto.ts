import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
	@ApiProperty({ example: 'email@email.com', description: 'Email' })
	readonly email: string

	@ApiProperty({ example: 'Login', description: 'Login' })
	readonly login: string

	@ApiProperty({ example: 'password', description: 'Password' })
	readonly password: string
}
