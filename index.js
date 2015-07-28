const wayfarer = require('wayfarer')
const http = require('http')
const url = require('url')

const countHandler = require('./count/index')

const port = 1337

const server = http.createServer((req, res) => {
  const router = wayfarer('/404')

  router.on('/graphql', countHandler(req, res))
  router.on('/404', notFoundHandler)

  const pathname = url.parse(req.url).pathname
  router(pathname)

  // handle 404 routes
  // null -> null
  function notFoundHandler () {
    console.log('nah')
    res.end()
  }
})

server.listen(port, function () {
  console.log('port: ' + port)
})
