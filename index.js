const graphql = require('graphql').graphql
const methodist = require('methodist')
const wayfarer = require('wayfarer')
const send = require('send-data/json')
const body = require('body')
const http = require('http')
const url = require('url')

const schema = require('./schema')

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
      body(req, res, (err, resp) => {
        if (err) throw err
        graphql(schema, resp)
          .then(body => {
            send(req, res, body)
          })
      })
    },
    get () {
      graphql(schema, req.body)
        .then(body => {
          send(req, res, body)
        })
    }
  })
}
