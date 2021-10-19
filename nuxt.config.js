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
        },],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // '@/assets/styles/main.scss',
        '@/assets/styles/bootstrap.css',
        '@/assets/styles/style.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios',
        {
            src: '~/plugins/vue-carousel.js',
            mode: 'client'
        },
        '~/plugins/veevalidate',
        '~/plugins/roles'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
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
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        "cookie-universal-nuxt"
    ],

    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        icons: true,
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vee-validate/dist/rules"],
        babel: {
            compact: true,
        },
        /*
         ** You can extend webpack config here
         */
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios

    
    publicRuntimeConfig: {
        axios: {
            baseURL: process.env.BASE_URL || 'https://coreshop.paystar.ir/api'
            // browserBaseURL: process.env.BROWSER_BASE_URL || 'https://coreshop.paystar.ir/api'
        },
    },
    privateRuntimeConfig: {
        axios: {
            baseURL: process.env.BASE_URL || 'https://coreshop.paystar.ir/api',
        },
        // apiSecret: process.env.API_SECRET,
    },
    loading: {
        color: '#00c1a4',
        height: '2px'
    },
    auth: {
        strategies: {
            'laravelJWT': {
                // provider: 'laravel/jwt',
                url: 'https://coreshop.paystar.ir/api',
                endpoints: {
                    login: {
                        url: '/customer/login',
                        method: 'post',
                    },
                    user: {
                        url: '/customer/current',
                        method: 'get'
                    }
                },
                token: {
                    property: 'data.api.token',
                    // maxAge: 60 * 60
                },
                //   refreshToken: {
                //     maxAge: 20160 * 60
                //   },
            },
        }
    }
}
