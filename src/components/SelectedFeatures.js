import React from 'react'
import { Table, Header, Button } from 'semantic-ui-react'

export default function SelectedFeatures() {
    return (
        <div className="selected-features">
            <Header as='h4'>Selected Features</Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell className="feature-name" active>Select Word / Next Occurence</Table.Cell>
                        <Table.Cell> </Table.Cell>
                        <Table.Cell><Button size='medium'>Remove</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className="feature-name" active>Show/Hide Terminal</Table.Cell>
                        <Table.Cell> </Table.Cell>
                        <Table.Cell><Button size='medium'>Remove</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className="feature-name" active>Show Search Command</Table.Cell>
                        <Table.Cell> </Table.Cell>
                        <Table.Cell><Button size='medium'>Remove</Button></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}