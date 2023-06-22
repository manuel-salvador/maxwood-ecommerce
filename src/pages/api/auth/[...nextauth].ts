import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'MaxWoodAuth',
      credentials: {
        email: { label: 'Correo electrónico', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
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
};

export default NextAuth(options);
