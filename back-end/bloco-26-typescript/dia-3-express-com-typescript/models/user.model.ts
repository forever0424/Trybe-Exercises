import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User, UserWithId } from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  };

  public async getAll(): Promise<UserWithId[]> {
    const result = await this.connection
      .execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as UserWithId[];
  };

  public async getUserById(id: number): Promise<UserWithId> {
    const [result] = await this.connection
      .execute('SELECT * FROM Users WHERE id=?', [id]);
    const [user] = result as UserWithId[];
    return user;
  };

  public async create(user: User): Promise<UserWithId> {
    const { name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const [{ insertId }] = result;
    return { id: insertId, ...user };
  };

  public async update(id: number, user: User): Promise<UserWithId> {
    const { name, email, password } = user;
    await this.connection.execute(
      'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
      [name, email, password, id],
    );
    return { id, ...user };
  };

  public async delete(id: number): Promise<void> {
    await this.connection.execute('DELETE FROM Users WHERE id=?', [id]);
    return;
  };
}