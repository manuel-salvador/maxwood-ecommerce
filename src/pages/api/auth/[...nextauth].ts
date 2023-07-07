import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const getNextAuthOptions = (
  req: NextApiRequest | GetServerSidePropsContext['req'],
  res: NextApiResponse | GetServerSidePropsContext['res'],
) => {
  const authOptions: NextAuthOptions = {
    pages: {
      signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: 'MaxWoodAuth',
        credentials: {
          email: { label: 'Correo electrónico', type: 'email' },
          password: { label: 'Contraseña', type: 'password' },
          remember: { label: 'Recordarme', type: 'checkbox' },
        },
        async authorize(credentials) {
          const isValidPassword =
            credentials?.password &&
            credentials.password.length >= 8 &&
            credentials.password.length <= 20;

          if (!isValidPassword) {
            return null;
          }

          const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-type': 'application/json' },
          });

          const user = await response.json();
          if (response.ok && user) {
            return user;
          }

          return null;
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.role = user.role;
        }
        return token;
      },
      session({ session, token }) {
        if (token && session.user) {
          session.user.role = token.role;
        }
        return session;
      },
    },
  };

  return authOptions;
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, getNextAuthOptions(req, res));
}
