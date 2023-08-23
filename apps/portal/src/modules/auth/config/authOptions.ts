import { PrismaAdapter } from '@next-auth/prisma-adapter';
import axios, { AxiosError } from 'axios';

import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { K_BASE_URL } from '@/modules/shared/constants';
import prismaClient from '@/modules/shared/libs/database/prismaClient';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const response = await axios.request({
            method: 'POST',
            data: credentials,
            baseURL: K_BASE_URL,
            url: '/api/user/login',
          });

          return response.data.user;
        } catch (error) {
          if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.error ?? 'Something went wrong');
          }
          throw new Error('Something went wrong');
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user: {
            ...user,
          },
        };
      }

      return token;
    },
  },
};
