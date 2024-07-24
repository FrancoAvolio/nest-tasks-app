import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Francisco', email: 'XXXXXXXXXXXXXXXXXXX@hotmail.com' },
    { id: 2, name: 'Franco', email: 'XXXXXXXXXXXXXXXXXXXX@gmail.com' },
  ];
  getUsers() {
    return this.users;
  }
}
