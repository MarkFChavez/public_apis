import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Heading = props => (
  <Header as='h2' icon>
    <Icon name='settings' />
    {props.children}
    <Header.Subheader>
      A collective list of public JSON APIs for use in web development.
    </Header.Subheader>
  </Header>
)

export default Heading