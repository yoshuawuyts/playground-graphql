const graphql = require('graphql').graphql
const methodist = require('methodist')
const send = require('send-data/json')
const body = require('body')

const schema = require('./schema')

module.exports = graphQLHandler

// handle graphQl path
// (req, res) => fn
function graphQLHandler (req, res) {
  return methodist(req.method, { put: put })

  // handle GraphQL query
  // null -> null
  function put () {
    body(req, res, (err, resp) => {
      if (err) throw err
      graphql(schema, resp)
        .then(body => {
          send(req, res, body)
        })
    })
  }
}
