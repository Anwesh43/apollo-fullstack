const typeDefs = require('./schema')
const {ApolloServer} = require('apollo-server')


const bookStore = require('./BookStore')
const resolvers = {
    Query: {
        books() {
            return bookStore.getBooks()
        }
    }
}
const startServer = async() => {
    const server = new ApolloServer({typeDefs, resolvers})
    const {url} = await server.listen()
    console.log(`server started ${url}`)
}

module.exports = startServer