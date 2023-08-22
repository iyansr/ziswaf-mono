import { User as DatabaseUser } from 'database';

import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Omit<DatabaseUser, 'password'> & DefaultSession['user'];
  }
  interface User extends Omit<DatabaseUser, 'password'> {}
}
