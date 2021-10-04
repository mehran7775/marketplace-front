import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LaravelJWTScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/",
    "home": "/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "laravelJWT"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // laravelJWT
  $auth.registerStrategy('laravelJWT', new LaravelJWTScheme($auth, {
  "url": "https://coreshop.paystar.ir",
  "endpoints": {
    "login": {
      "url": "https://coreshop.paystar.ir/api/customer/login",
      "method": "post"
    },
    "refresh": {
      "url": "https://coreshop.paystar.ir/api/auth/refresh"
    },
    "logout": {
      "url": "https://coreshop.paystar.ir/api/auth/logout"
    },
    "user": false
  },
  "token": {
    "property": "data.api.token",
    "maxAge": 3600
  },
  "name": "laravelJWT",
  "refreshToken": {
    "property": false,
    "data": false,
    "maxAge": 1209600,
    "required": false,
    "tokenRequired": true
  },
  "user": {
    "property": false
  },
  "clientId": false,
  "grantType": false
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
