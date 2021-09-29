const middleware = {}

middleware['checkAuth'] = require('..\\middleware\\checkAuth.js')
middleware['checkAuth'] = middleware['checkAuth'].default || middleware['checkAuth']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
