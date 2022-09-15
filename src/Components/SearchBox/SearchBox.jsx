import "./SearchBox.scss"

import React from 'react'
import SearchList from "../SearchList/SearchList"


const SearchBox = ({handleInput, searchedBeer}) => {

// in this section the plan is to have a dropdown list coming from the searchbox that filters the available selection of beers based on the user input
//onFocus in the box run a api request to pull an array of beers to populate the dropdown list with horizontal cards with name and small image
// list shrinks based on the user input.

  return (
  <>
    <div>
      <label htmlFor="input">Search: </label>
      <input type="text" placeholder="Beer name..."
      // onFocus={handleList}
      onInput={handleInput}/>
    </div>
    <div>
      {/* <SearchList searchedBeer={searchedBeer}/> */}
    </div>
  </>
  )
}

export default SearchBox