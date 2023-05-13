import config from "@/config";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  secret: config.authSecret,
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
