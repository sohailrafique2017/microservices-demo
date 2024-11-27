import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async createUser(createUserDto: any) {
    try {
      return 'user created succesfully';
    } catch (error) {
      throw error;
    }
  }
}
