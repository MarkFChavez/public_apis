import React, { Component } from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ApiList from './components/ApiList'

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

  onSelect (e) {
    this.setState({ selectedCategory: e.target.value })
  }

  getEntries () {
    return this.state.entries
      .filter(entry => entry.Category === this.state.selectedCategory)
  }

  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header> Public APIs <small> by toddmotto </small> </Header>
        <SearchForm categories={this.getCategories()} onSelect={this.onSelect} />
        {this.state.selectedCategory && <ApiList entries={this.getEntries()} />}
      </div>
    )
  }
}

export default App
