// import config from "@/config";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Config } from 'sst/node/config'
console.log(Config.NEXTAUTH_SECRET)
export const authOptions: AuthOptions = {
  secret: Config.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'text' }
      },
      async authorize(credentials) {
        if(!credentials)
          return null;

        return {
          id: credentials.email,
          email: credentials.email
        }
      }
    })
  ]
}
