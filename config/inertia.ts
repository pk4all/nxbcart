import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps } from '@adonisjs/inertia/types'
import type { HttpContext } from '@adonisjs/core/http'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  //rootView: 'inertia_layout',
    rootView: ({ request }: HttpContext) => {
      //console.log(request.url()); R04651659
      // if(request.url()==='/admin' || request.url()==='/admin/'|| request.url()==='/admin/sign-up'){
      //   return 'admin_login_layout'
      // }
      if (request.url().startsWith('/admin')) {
         return 'admin_layout'
      }
      return 'web_layout'
    },

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
      appName: 'NXB Kart',
      appLogo: 'NXB Kart',
      user: (ctx) => ctx.inertia.always(() => ctx.auth.user?.serialize()),
      errors: (ctx) => ctx.session.flashMessages.get('errors'),
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.tsx'
  }
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}