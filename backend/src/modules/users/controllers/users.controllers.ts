import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(@Query('cant') cant: number) {
    return this.usersService.getUsers(cant);
  }
}
