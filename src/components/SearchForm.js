import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const dropdown = categories => (
  categories.map(category => {
    return { key: category, value: category, text: category }
  })
)

const SearchForm = ({ categories, onSelect }) => (
  <Dropdown
    placeholder='Select a category'
    floating
    fluid
    search
    selection
    onChange={onSelect}
    options={dropdown(categories)} />
)

export default SearchForm