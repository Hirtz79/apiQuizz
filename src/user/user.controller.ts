import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserProvider } from './user';
import { User } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private userProvider: UserProvider) {}

  @Get()
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: User,
    description: 'User GET ALL',
    isArray: true,
  })
  getUser() {
    return this.userProvider.getPatient();
  }

  @Post()
  @HttpCode(201)
  @ApiResponse({ status: 201, type: User, description: 'User ADD USER' })
  create(@Body() user: User): User {
    return this.userProvider.create(user);
  }
}
