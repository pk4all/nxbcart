/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../web/css/vendors/bootstrap.css';
import '../web/css/app.css';
import '../web/css/font-style.css';
import '../web/css/vendors/font-awesome.css';
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || ''

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title}`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
});