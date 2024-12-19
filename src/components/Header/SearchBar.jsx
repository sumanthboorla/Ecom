import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <div className='SearchBar'>
        <label> Search</label>
         <input placeholder='searchItem' />
      </div>
    )
  }
}

export default SearchBar
