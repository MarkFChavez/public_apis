import React, { Component } from 'react'
import SearchForm from './components/SearchForm'
import Heading from './components/Heading'
import ApiList from './components/ApiList'
import { Grid } from 'semantic-ui-react'

const API_URL = 'https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { entries: [], selectedCategory: null }
    this.onSelect = this.onSelect.bind(this)
  }

  componentDidMount () {
    fetch(API_URL)
      .then(response => response.json())
      .then(({ entries }) => {
        this.setState({ entries })
      })
      .catch(e => e)
  }

  getCategories () {
    const onlyUnique = (elem, pos, arr) => arr.indexOf(elem) === pos
    return this.state.entries.map(entry => entry.Category)
      .filter( onlyUnique )
  }

  onSelect (event, data) {
    this.setState({ selectedCategory: data.value })
  }

  getEntries () {
    return this.state.entries
      .filter(entry => entry.Category === this.state.selectedCategory)
  }

  render () {
    return (
      <Grid container centered>
        <Grid.Row>
          <Grid.Column>
            <Heading>
              Public APIs
            </Heading>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <SearchForm categories={this.getCategories()} onSelect={this.onSelect} />
          </Grid.Column>
        </Grid.Row>

        {this.state.selectedCategory && (
          <Grid.Row>
            <Grid.Column>
              <ApiList entries={this.getEntries()} />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    )
  }
}

export default App
