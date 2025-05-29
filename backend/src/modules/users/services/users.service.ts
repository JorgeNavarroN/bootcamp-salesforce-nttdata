import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getUsers(cant: number) {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=${cant}`,
      );
      const data = await response.json();
      return {
        status: HttpStatus.OK,
        message: 'Users fetched successfully',
        data: data.results,
      };
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching users');
    }
  }
}
