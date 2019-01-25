const resolvers = {
  Mutation: {
    updateHello: (root, { value }, { cache }) => {
      const data = {
        hello: value
      }
      cache.writeData({ data })
      return data
    }
  }
}

const clientState = {
  // Set default values for local state.
  defaults: {
    hello: 'Hello World!'
  },
  resolvers
}

export default function(context) {
  return {
    // required
    httpEndpoint: 'http://localhost:4000',
    // optional
    // See https://www.apollographql.com/docs/link/links/http.html#options
    httpLinkOptions: {
      credentials: 'same-origin'
    },
    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    wsEndpoint: null, // 'ws://localhost:4000', // optional
    // LocalStorage token
    tokenName: 'apollo-token', // optional
    // Enable Automatic Query persisting with Apollo Engine
    persisting: false, // Optional
    // Use websockets for everything (no HTTP)
    // You need to pass a `wsEndpoint` for this to work
    websocketsOnly: false, // Optional
    // return the client state
    clientState
  }
}
