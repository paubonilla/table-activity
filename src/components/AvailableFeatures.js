import React from 'react'
import { Table, Header, Button } from 'semantic-ui-react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { FEATURES__QUERY } from './gql'
import { useQuery } from '@apollo/react-hooks'


const client = new ApolloClient({
    uri: 'https://akddoarj68.execute-api.us-west-1.amazonaws.com/dev/graphql'
})

export default function AvailableFeatures() {
    const [features, setFeatures] = React.useState([])
    const { loading, error, data } = useQuery(FEATURES__QUERY, {
        variables: { "_id": "5d534aec27c3f0fccf882fe8" }
    })

    React.useEffect(() => {
        if (data) setFeatures(data.app.features)
    }, [data])
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ApolloProvider client={client}>
            <div className="available-features">
                <Header as='h4'>Available Features</Header>
                <Table celled className="table">
                    <Table.Body>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Mac</Table.HeaderCell>
                                <Table.HeaderCell>Win</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {
                            features.map((feature, i) => (
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell active className="feature-name">{feature.name}</Table.Cell>
                                        <Table.Cell className="active-features" >{(feature.macBinding === null || feature.macBinding === "") ?
                                            "Not Available"
                                            : feature.macBinding}</Table.Cell>
                                        <Table.Cell className="active-features" >{(feature.winBinding === null || feature.winBinding === "") ?
                                            "Not Available"
                                            : feature.winBinding}</Table.Cell>
                                        <Table.Cell> </Table.Cell>
                                        <Table.Cell><Button size='medium'>Add</Button></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </ApolloProvider>
    )
}