import "./FilterList.scss";

import React from 'react'
import FilteredItem from "../FilteredItem/FilteredItem";


//add a link to each term to show a sorted array of beers based on the term
//abv_gt	number	Returns all beers with ABV greater than the supplied number
//brewed_after	date	Returns all beers brewed after this date, the date format is mm-yyyy e.g 10-2011

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