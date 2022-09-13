import "./SearchBox.scss"

import React from 'react'
import SearchList from "../SearchList/SearchList"

const SearchBox = ({handleInput, searchedBeer, searchTerm}) => {

  return (
  <>
    <div>
      <input type="text" placeholder="Beer name..."
      onInput={handleInput}
      value={searchTerm}/>
    </div>
    <div>
      {/* <SearchList searchedBeer={searchedBeer}/> */}
    </div>
  </>
  )
}

export default SearchBox