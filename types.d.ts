import 'next-auth';

declare module 'next-auth' {
  interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username?: string | null; // Add the username property here
  }

  interface Session {
    user: User;
  }
}
