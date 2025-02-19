import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import type { Authenticators } from '@adonisjs/auth/types'

/**
 * Auth middleware is used authenticate HTTP requests and deny
 * access to unauthenticated users.
 */
export default class CustomerAuthMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   */
  redirectTo = '/login'

  async handle(
    ctx: HttpContext,
    next: NextFn,
    options: {
      guards?: (keyof Authenticators)[]
    } = {}
  ) {
      const cu = await ctx.auth.use('customer').user
      if( await ctx.auth.use('customer').check()){
        return next()
      }else{
        return ctx.response.redirect('/')
      }
    // if(ctx.request.url().startsWith('/')){
    //   await ctx.auth.authenticateUsing(options.guards, { loginRoute:'/login' })
    // }else{
      //await ctx.auth.use('customer').authenticateUsing(options.guards, { loginRoute: this.redirectTo })
    //}
   
  }
}