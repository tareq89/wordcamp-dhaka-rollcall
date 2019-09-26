const path = require('path')
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/sass/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const sassLoaderNames = ['scss', 'sass']
      sassLoaderNames.forEach((loaderName) => {
        let sassLoader = ctx.loaders[loaderName]
        sassLoader.includePaths = []
        sassLoader.includePaths.push(path.resolve(__dirname, 'sass'))
        if (loaderName === 'sass' && sassLoader.indentedSyntax) {
          sassLoader.data = '@import "base/_base"'
        }
      })

      ctx.loaders['cssModules'].modules.localIdentName = ctx.isDev ? '[name]__[local]' : '[hash:base64:10]'
      ctx.loaders['cssModules'].localsConvention = 'camelCase'
    }
  }
}
