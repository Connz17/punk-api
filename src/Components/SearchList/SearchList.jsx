import "./SearchList.scss"

import React from 'react'

const SearchList = ({searchedBeer}) => {

  return (
    <div className="search-list">{searchedBeer}</div>
  )
}

export default SearchList