import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserProvider {
  users: User[] = [
    {
      id: 'dede',
      pseudo: 'Thomas',
      score: 0,
    },
  ];

  getPatient(): User[] {
    return this.users;
  }

  create(data): User {
    const user = { ...data, id: uuidv4() };
    this.users.push(user);
    return user;
  }
}
