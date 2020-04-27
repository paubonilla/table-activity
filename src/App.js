import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Features from './components/Features'
import './App.css'

const client = new ApolloClient({
  uri: 'https://akddoarj68.execute-api.us-west-1.amazonaws.com/dev/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        test
        <Features />
      </div>
    </ApolloProvider>
  )
}

export default App;
