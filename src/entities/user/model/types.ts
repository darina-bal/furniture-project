export interface User {
  id: string;
  firstname: string;
  lastname: string;
  displayname: string;
  email: string;
  avatarUrlJpg?: string;
  avatarUrlWebp?: string;
  role: 'user' | 'guest';
}