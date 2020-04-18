import React from 'react'
import gql from 'graphql-tag'
import ApolloClient from 'apollo-boost'
import { Table } from 'semantic-ui-react'
import { ApolloProvider, Query } from 'react-apollo'
import Features from './components/Features'
import './App.css'

const client = new ApolloClient({
  uri: 'https://ix4samrd70.execute-api.us-west-1.amazonaws.com/dev/graphql'
})

// Writing query
const FEATURES__QUERY = gql`
query ($_id: String!) {
  app(_id: $_id) {
    _id
    name
    logoUrl
    features{
      FID
      name
      macBinding
      winBinding
      description
      longDescription
    }
  }
}
`
// const variables = gql`
// {
//   "_id": "5d534aec27c3f0fccf882fe8"
// }
// `

// Running query outside of React
// client.query({
//   query: FEATURES__QUERY
// }).then(res => console.log(res));

function App() {


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Features />
        
        <Query query={FEATURES__QUERY}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            // if (error) return `Error! ${error.message}`;
            const { app } = data;

            return app.map(feature => (
              <Table className="table">
                <Table.Body>
                  <Table.Row>
                    <Table.Cell className="table__cell">{feature.name}</Table.Cell>
                    <Table.Cell className="table__cell">{feature.macBinding}</Table.Cell>
                    <Table.Cell className="table__cell">{feature.winBinding}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ));
          }}
        </Query>
      </div>
    </ApolloProvider>
  )
}

export default App;
