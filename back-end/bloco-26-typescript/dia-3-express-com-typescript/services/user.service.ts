import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User, UserWithId } from '../interfaces/user.interface';

class userService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<UserWithId[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getUserById(id: number): Promise<UserWithId> {
    const user = await this.model.getUserById(id);
    return user;
  }

  public async create(user: User): Promise<UserWithId> {
    const userCreated = await this.model.create(user);
    return userCreated;
  }

  public async update(id: number, user: User): Promise<UserWithId> {
    const userUpdated = await this.model.update(id, user);
    return userUpdated;
  }

  public async delete(id: number): Promise<void> {
    await this.model.delete(id);
    return;
  }
}

export default userService;