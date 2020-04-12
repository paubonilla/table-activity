import React from 'react';
import { Table } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Feature</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Show Debug</Table.Cell>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>Action</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Select Next Occurrence</Table.Cell>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>Action</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Show Source Control</Table.Cell>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>Action</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    </div>
  );
}

export default App;
