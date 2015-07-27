const methodist = require('methodist')
const wayfarer = require('wayfarer')
const send = require('send-data')
const http = require('http')
const url = require('url')

const port = 1337

// create server
const server = http.createServer((req, res) => {
  const router = wayfarer()
  router.on('/graphql', graphQlHandler(req, res))

  const pathname = url.parse(req.url).pathname
  router(pathname)
})

// start listening
server.listen(port, function () {
  console.log('port: ' + port)
})

// handle graphQl path
// (req, res) => fn
function graphQlHandler (req, res) {
  return methodist(req.method, {
    post () {
      send(req, res, { body: 'hello world' })
    },
    get () {
      send(req, res, { body: 'hello world' })
    }
  })
}
