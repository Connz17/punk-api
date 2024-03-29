import "./SearchBox.scss"

import React from 'react'


const SearchBox = ({handleInput}) => {

// in this section the plan is to have a dropdown list coming from the searchbox that filters the available selection of beers based on the user input
//onFocus in the box run a api request to pull an array of beers to populate the dropdown list with horizontal cards with name and small image
// list shrinks based on the user input.

  return (
  <>
  <div className="search-box">
    <input onInput={handleInput} type="text" className="input-search" placeholder="Search..."/>
  </div>
  </>
  )
}

export default SearchBox

