import {Body, Controller, Get, Post} from '@nestjs/common'
import {CreateUserDto} from './dto/createUser.dto'
import {UsersService} from './users.service'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {User} from './users.model'

@ApiTags('Users')
@Controller('users')
export class UsersController {
	constructor(private userService: UsersService) {}

	@ApiOperation({ summary: 'Create user' })
	@ApiResponse({ status: 200, type: User })
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.userService.createUser(userDto)
	}

	@ApiOperation({ summary: 'All users' })
	@ApiResponse({ status: 200, type: [User] })
	@Get()
	getAll() {
		return this.userService.getAllUsers()
	}
}
