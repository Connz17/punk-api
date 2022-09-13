import "./FilterList.scss";

import React from 'react'
import FilteredItem from "../FilteredItem/FilteredItem";


//add a link to each term

const FilterList = () => {
  return (
    <div>
        <FilteredItem filterTerm={"ABV%"}/>
        <FilteredItem filterTerm={"pH"}/>
        <FilteredItem filterTerm={"Brew Date"}/>
    </div>
  )
}

export default FilterList