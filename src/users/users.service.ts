import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: { id: number; name: string; email: string; age: number }[] = [];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(id: number, updateData: Partial<CreateUserDto>) {
  const user = this.users.find((u) => u.id === id);

  if (!user) {
    return { message: 'User not found' };
  }

  Object.assign(user, updateData);

  return user;
}

deleteUser(id: number) {
  this.users = this.users.filter(
    (user) => user.id !== id,
  );

  return {
    message: 'User deleted successfully',
  };
}
}