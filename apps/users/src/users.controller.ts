import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.create')
  createUser(@Payload() createUserDto: any) {
    return this.usersService.createUser(createUserDto);
  }
}
