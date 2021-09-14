export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'shop',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/styles/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
            '~/components/atoms',
            '~/components/layouts',
            '~/components/molecules',
            '~/components/templates',
        ]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/fontawesome',
    ],

    styleResources: {
        scss: '@/assets/styles/resources/_index.scss',
    },

    fontawesome: {
        component: 'fa',
        icons: {
            solid: true,
            brands: true,
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        icons: true,
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    publicRuntimeConfig: {
        baseURL: process.env.BASE_URL || 'http://localhost:8000',
    },

    privateRuntimeConfig: {
        apiSecret: process.env.API_SECRET,
    },
}
