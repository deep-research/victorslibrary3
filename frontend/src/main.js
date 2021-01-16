// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fontsource/merienda-one'
import '@fontsource/gilda-display'
import '@fontsource/amiko'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  // Make BootstrapVue available throughout your project
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)

  // Add a viewport width to a meta tag
  // head.meta.push({
  //   name: 'viewport',
  //   content: 'width=device-width, initial-scale=1, minimum-scale=1'
  // })
}
