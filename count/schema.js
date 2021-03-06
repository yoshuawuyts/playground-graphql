const GraphQLObjectType = require('graphql/lib/type').GraphQLObjectType
const GraphQLSchema = require('graphql/lib/type').GraphQLSchema
const GraphQLInt = require('graphql/lib/type').GraphQLInt

var count = 0

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: () => count
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'updates the count',
        resolve: () => count += 1
      }
    }
  })
})
