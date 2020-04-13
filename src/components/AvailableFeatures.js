import React, { Component } from 'react'
import { Table, Header, Button } from 'semantic-ui-react'

export default class AvailableFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Feature'
        }
    }
    render() {
        return (
            <div className="available-features">
                <Header as='h4'>Available Features</Header>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{this.state.name}</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="active-features" active>Show Debug</Table.Cell>
                            <Table.Cell> </Table.Cell>
                            <Table.Cell><Button size='medium'>Add</Button></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="active-features" active>Select Next Occurrence</Table.Cell>
                            <Table.Cell> </Table.Cell>
                            <Table.Cell><Button size='medium'>Add</Button></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="active-features" active>Show Source Control</Table.Cell>
                            <Table.Cell> </Table.Cell>
                            <Table.Cell><Button size='medium'>Add</Button></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}