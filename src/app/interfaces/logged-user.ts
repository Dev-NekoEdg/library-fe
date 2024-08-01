export interface LoggedUser {
  isLoggedIn: boolean;
  userId: string | null;
  name: string | null;
  lastName: string | null;
  email: string | null;
  userName: string| null;
  userToken: string| null;
}
