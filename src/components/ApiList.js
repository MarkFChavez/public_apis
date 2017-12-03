import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

const ApiList = props => (
  <Table celled padded color='green'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>API</Table.HeaderCell>
        {/* <Table.HeaderCell>Category</Table.HeaderCell> */}
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>HTTPS</Table.HeaderCell>
        <Table.HeaderCell>Link</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {props.entries.map(entry => (
        <Table.Row key={entry.API}>
          <Table.Cell>
            <Header as='h3'> {entry.API} </Header>
          </Table.Cell>

          {/* <Table.Cell> {entry.Category} </Table.Cell> */}
          <Table.Cell> {entry.Description} </Table.Cell>
          <Table.Cell> {entry.HTTPS ? 'Yes' : 'No'} </Table.Cell>
          <Table.Cell>
            <a href={entry.Link} target='_blank'> {entry.Link} </a>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

export default ApiList