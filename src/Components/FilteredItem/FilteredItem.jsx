import "./FilteredItem.scss"
import * as CiIcons from 'react-icons/ci'
import React from 'react'

const FilteredItem = ({filterTerm, toggleFilter}) => {
  return (
    <div className="filters">
      <CiIcons.CiBeerMugFull />
      <h3 className="option" onClick={toggleFilter}>{filterTerm}</h3>  
    </div>
  )
}

export default FilteredItem