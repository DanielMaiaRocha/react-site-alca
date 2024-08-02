import User from '@/app/models/User'
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from '@/app/utils/db';


const options = NextAuth({
    providers: [
      CredentialsProvider({
        id: "Credentials",
        name: "Credentials",
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
              return user;
            } else {
              throw new Error("Email or password is wrong");
            }
          } else {
            throw new Error("Email or password is wrong");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { options as GET, options as POST };
