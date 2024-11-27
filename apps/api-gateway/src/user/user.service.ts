import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_CLIENT') private readonly userClient: ClientProxy,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userClient.send('users.create', createUserDto);
  }
}
