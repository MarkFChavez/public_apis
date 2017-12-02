import React from 'react'

const ApiList = props => (
  <table>
    <thead>
      <tr>
        <th> Name </th>
        <th> Auth </th>
        <th> Category </th>
        <th> Description </th>
        <th> HTTPS </th>
        <th> Link </th>
      </tr>
    </thead>

    <tbody>
      {props.entries.map(entry => {
        return (
          <tr key={entry.API}>
            <td> {entry.API} </td>
            <td> {entry.Auth} </td>
            <td> {entry.Category} </td>
            <td> {entry.Description} </td>
            <td> {entry.HTTPS ? 'Yes' : 'No'} </td>
            <td> {entry.Link} </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default ApiList