import { Config } from 'sst/node/config'

if(typeof window === 'undefined') {
  process.env.NEXTAUTH_SECRET = Config.NEXTAUTH_SECRET
}

const config = {
  authSecret: process.env.NEXTAUTH_SECRET
}

export default config;
