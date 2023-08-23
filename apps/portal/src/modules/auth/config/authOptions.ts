import { PrismaAdapter } from '@next-auth/prisma-adapter';

import type { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import prismaClient from '@/modules/shared/libs/database/prismaClient';

export type UserSession = Session & {
  user?: {
    id?: string;
  };
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const url = process.env.NEXT_PUBLIC_URL || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
        const result = await fetch(`${url}/api/user/login`, {
          body: JSON.stringify(credentials),
          method: 'POST',
        });
        const json = await result.json();
        if (result.ok && json) {
          return json;
        }
        throw new Error(json?.error ?? 'Something went wrong');
      },
    }),
  ],

  callbacks: {
    async session({ session, user }) {
      if (!user) {
        session.user = user;
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
};
