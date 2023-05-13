import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'

export async function middleware(req: NextRequestWithAuth) {
  const appConfig = await import('@/config');

  // ...Other custom middleware that need to be executed before withAuth would be here...
  return withAuth(req, {
    secret: appConfig.default.authSecret,
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
