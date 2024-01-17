import { chain } from '@/shared/middlewares/chain'
import { withMiddleware1 } from '@/shared/middlewares/middleware1'
import { withMiddleware2 } from '@/shared/middlewares/middleware2'

export default chain([withMiddleware1, withMiddleware2])

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}