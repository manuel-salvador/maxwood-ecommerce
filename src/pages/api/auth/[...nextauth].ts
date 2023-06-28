import type { NextApiRequest, NextApiResponse } from 'next';

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
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
  });
}
