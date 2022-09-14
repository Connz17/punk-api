import "./FilteredItem.scss"

import React from 'react'

const FilteredItem = ({filterTerm, toggleFilter}) => {
  return (
    <div className="filters">
      <h3 onClick={toggleFilter}>{filterTerm}</h3>  
    </div>
  )
}

export default FilteredItem