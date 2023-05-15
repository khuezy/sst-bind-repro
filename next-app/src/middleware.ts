import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { Config } from 'sst/node/config'

export async function middleware(req: NextRequestWithAuth) {
  console.log('~~: ', Config.NEXTAUTH_SECRET)
  // ...Other custom middleware that need to be executed before withAuth would be here...
  return withAuth(req, {
    secret: Config.NEXTAUTH_SECRET,
    callbacks: {
      authorized() {
        return true;
      }
    }
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
