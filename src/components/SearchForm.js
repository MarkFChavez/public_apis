import React from 'react'

const SearchForm = ({ categories, onSelect }) => (
  <form>
    <select onChange={onSelect}>
      <option></option>
      {
        categories.map(category =>
          <option key={category} value={category}> {category} </option>
        )
      }
    </select>
  </form>
)

export default SearchForm