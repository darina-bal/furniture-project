export interface User {
  id: string;
  firstname: string;
  lastname: string;
  displayname: string;
  email: string;
  avatarUrl?: string;
  role: 'user' | 'guest';
}