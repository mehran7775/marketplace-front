export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'مارکت پلیس-فروشگاه ساز رایگان-%s',
        title: 'مارکت پلیس-فروشگاه ساز رایگان',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                hid: 'google-site-verification',
                name: 'google-site-verification',
                content: 'wzWhJaqpQniEGJwWeIMISdhq0AnDmqeTZ-tDFBpBB6Q'
            }, {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }],
        script: [{
            src: "https://www.google-analytics.com/analytics.js",
            async: true,
            crossorigin: "anonymous"
        }, ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/styles/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios',
        {
            src: './plugins/vue-carousel.js',
            mode: 'client'
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    // components: {
    //     dirs: [
    //         '~/components',
    //         '~/components/atoms',
    //         '~/components/layouts',
    //         '~/components/molecules',
    //         '~/components/templates',
    //     ]
    // },
    components: true,

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
    axios: {
        // baseURL: process.env.BASE_URL || 'http://localhost:8000',
        // withCredentials: false,
        // headers: {
        //     common: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     },
        // }
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // publicRuntimeConfig: {
    //     baseURL: process.env.BASE_URL || 'http://localhost:8000',
    // },

    // privateRuntimeConfig: {
    //     apiSecret: process.env.API_SECRET,
    // },
    loading: {
        color: 'blue',
        height: '2px'
    },
}
