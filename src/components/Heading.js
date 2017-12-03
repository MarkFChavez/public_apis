import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Heading = props => (
  <Header as='h1' icon textAlign='center'>
    <Icon name='settings' />
    {props.children}
    <Header.Subheader>
      A collective list of public JSON APIs for use in web development.
    </Header.Subheader>
    <Header.Subheader>
      Amazing work by <a href='https://twitter.com/toddmotto'>@toddmotto</a>. You
      can <a href='https://github.com/toddmotto/public-apis'>contribute</a> to
      make this list more awesome as it is now!
    </Header.Subheader>
  </Header>
)

export default Heading