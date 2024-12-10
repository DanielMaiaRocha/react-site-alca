import User from '@/app/models/User';
import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '@/app/utils/db';
import jwt from 'jsonwebtoken';

const options = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'Credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const validPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (validPassword) {
              return {
                id: user._id,
                email: user.email,
                name: user.name,
              };
            } else {
              throw new Error('Email or password is incorrect');
            }
          } else {
            throw new Error('Email or password is incorrect');
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token._id = user._id
        token.email = user.email;
        token.name = user.name;
        token.jwt = jwt.sign(
          { id: user.id, email: user.email },
          process.env.NEXTAUTH_SECRET, 
          { expiresIn: '1h' }
        );
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user._id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.jwt = token.jwt;

        try {
          
          const response = await fetch(`http://localhost:8800/api/users/${session.user._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.jwt}`, 
            },
            body: JSON.stringify({ email: token.email }),
          });

          if (!response.ok) {
            console.error('Erro ao chamar a API:', await response.text());
          }
        } catch (error) {
          console.error('Erro ao enviar JWT para a API:', error);
        }
      }
      return session;
    },
  },
});

export { options as GET, options as POST };
