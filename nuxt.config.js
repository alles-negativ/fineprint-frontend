const Sass = require('sass')

export default {
  // server: {
  //   host: '0' // default: localhost
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // create a static page
  target: 'static',

  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fineprint',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'content from config' },
      { hid: 'author', name: 'author', content: 'alles-negativ' },
      { hid: 'keywords', name: 'keywords', content: 'Fineprint,Fineprint AG,Druck,Digitaldruck,Offsetdruck,Offset,Vorstufe,Zürich' },
      { hid: 'theme-color', name: 'theme-color', content: '#0050EC' },
      { hid: 'robots', name: 'robots', content: 'all' },
      { hid: 'referrer', name: 'referrer', content: 'no-referrer-when-downgrade' },
      { hid: 'og:locale', property: 'og:locale', content: 'de_CH' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GB' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'fineprint AG - Druckerei' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'fineprint AG - Druckerei in Zürich' },
      { hid: 'og:description', property: 'og:description', content: 'FINEPRINT bietet Ihnen Digital- und Offsetdruck in höchster Qualität. Dabei wollen unsere Produkte nicht nur ein Fest für die Augen sein. Ebenso wichtig ist uns, dass Timing und Leistung stimmen.' },
      { hid: 'og:image', property: 'og:image', content: 'https://linktofrontend/alles-negativ-static-image.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2121' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1414' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Example alt text for og:image' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // include scripts in static folder here
      // {src: "/script.js"}
    ]
  },

  publicRuntimeConfig: {
    kirby: {
      url: process.env.KIRBY_SITE,
      username: process.env.KIRBY_USERNAME,
      password: process.env.KIRBY_PASSWORD
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/nuxt-kirby-kql',
    '~/plugins/preview.client.js',
    '~/plugins/headroom.js',
    { src: '~/plugins/VueFlickity.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/device',
    '@nuxt/image',
    // '@nuxtjs/html-validator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/i18n',
    '@nuxtjs/moment',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Translation configuration
  // i18n: {
  //   strategy: 'prefix',
  //   locales: [
  //     {
  //        code: 'de',
  //        name: 'Deutsch'
  //     },
  //     {
  //        code: 'en',
  //        name: 'English'
  //     }
  //   ],
  //   defaultLocale: 'de',
  //   vueI18n: {
  //     fallbackLocale: 'de',
  //     messages: {
  //       de: {
  //         locations: 'Standorte',
  //         contact: 'Kontakt',
  //         open: 'Öffnungszeiten',
  //         accept: 'Oke! 👍',
  //         readmore: 'mehr',
  //         cookie: 'Diese Website verwendet Cookies',
  //       },
  //       en: {
  //         locations: 'Locations',
  //         contact: 'Contact',
  //         open: 'Opening Hours',
  //         accept: 'Oke! 👍',
  //         readmore: 'read more',
  //         cookie: 'This website uses cookies',
  //       }
  //     }
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass
      }
    },
    extend(config, ctx) {
      // You can extend webpack config here
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js";
    }
  },

  axios: {
    proxy: false // Can be also an object with default options
  },

  proxy: {
  },

  sitemap: {
    hostname: 'https://wwww.fineprintag.ch',
    gzip: true,
  },

  robots: {
    /* module options */
  },

  image: {
    domains: [
      'http://localhost:8888',
      'https://backend.fineprintag.ch/'
    ]
  }
}
