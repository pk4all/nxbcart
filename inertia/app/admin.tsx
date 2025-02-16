/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../backend/css/vendors/bootstrap.css';
import '../backend/css/vendors/font-awesome.css';
import '../backend/css/linearicon.css';
import '../backend/css/remixicon.css';
import '../backend/css/admin.css';

import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#F87415' },
  title: (title) => `${title} - ${appName}`,

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