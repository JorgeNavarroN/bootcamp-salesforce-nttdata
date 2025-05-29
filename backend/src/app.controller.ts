import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './modules/users/services/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getHello(): any {
    return this.appService.getUsers(10);
  }
}
