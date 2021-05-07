export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'epic_manager',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "/bootstrap/bootstrap.min.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', '@nuxtjs/firebase', '@nuxtjs/markdownit'
  ],
  markdownit: {
    runtime: true // Support `$md()`
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyB2HVBOEZFirO7jesw5DaqziZq37VeGCuk',
      authDomain: 'epic-manager.firebaseapp.com',
      projectId: 'epic-manager',
      storageBucket: 'epic-manager.appspot.com',
      messagingSenderId: '713364766385',
      appId: '1:713364766385:web:e4f1eb93dee948ae702c90',
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: 'user/ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'user/onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: false,
      }
    }
  },

  generate: {
    fallback: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
