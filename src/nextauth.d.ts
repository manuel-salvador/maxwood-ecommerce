import { DefaultUser } from 'next-auth';

export enum Role {
  user = 'user',
  admin = 'admin',
}
interface IUser extends DefaultUser {
  role?: Role;
  phone?: string;
  address?: string;
}
declare module 'next-auth' {
  interface User extends IUser {
    id?: string;
  }
  interface Session {
    user?: User;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {
    sub?: string;
  }
}
