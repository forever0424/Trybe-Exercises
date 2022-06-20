export interface UserWithId {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type User = Omit<UserWithId, 'id'>;