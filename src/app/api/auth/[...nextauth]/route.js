import User from "@/app/models/User"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import connect from "@/app/utils/db"
import GoogleProvider from "next-auth/providers/google";

const options = NextAuth({
    providers:[CredentialsProvider({
        id: "Credentials",
        name: "Credentials",
        async authorize(credentials) {
            await connect();

            try {
                const user = await User.findOne({
                    email: credentials.email,
                })

                if (user) {
                    const validPassword = await bcrypt.compare(
                        credentials.password,
                        user.password
                    )
                
                if (validPassword) {
                    return user 
                } else {
                    throw new Error("Email or password worng!")
                }
                
                } else {
                  throw new Error("Email or password worng!")  
                }
            } catch (error) {
                throw new Error(error)
            }
        },
    }),
    ],
    pages: {
        error:"/login"
    }
});

export {options as GET, options as POST}