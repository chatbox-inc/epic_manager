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
      apiKey: 'AIzaSyA72hQlO0lDxI-_LK16VOmVJEzntsKkBYE',
      authDomain: 'epic-manager-3d4e9.firebaseapp.com',
      projectId: 'epic-manager-3d4e9',
      storageBucket: 'epic-manager-3d4e9.appspot.com',
      messagingSenderId: '454500269237',
      appId: '1:454500269237:web:b5628c759d4305a49e52fc',
      measurementId: 'G-B4YW2SGHTG',
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
