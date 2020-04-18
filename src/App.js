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


const FEATURES__QUERY = gql`
query($_id: String!)
  {
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
`;

// Running query outside of React
// Don't need to run initial query
// client.query({
//   query: FEATURES__QUERY
// }).then(res => console.log(res));

function App() {
  const _id = {_id: "5d534aec27c3f0fccf882fe8"};
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Features />
        {/* Query component has variable prop so you dont' have to define it outside  https://www.apollographql.com/docs/react/v2.5/essentials/queries/#receiving-data */}
        <Query query={FEATURES__QUERY} variables={_id}>
          {({ loading, error, data, variables }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            console.log(variables);
            const { app } = data;
            {/* app.map errors since app returns an Object. */}
            return app.features.map(feature => (
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
