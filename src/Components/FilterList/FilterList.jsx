import "./FilterList.scss";

import React from 'react'
import FilteredItem from "../FilteredItem/FilteredItem";
import { Link } from "react-router-dom";


//add a link to each term to show a sorted array of beers based on the term
//abv_gt	number	Returns all beers with ABV greater than the supplied number
//brewed_after	date	Returns all beers brewed after this date, the date format is mm-yyyy e.g 10-2011

const FilterList = ({toggleFilter}) => {
  return (
    <div className="sort-menu">    
      <div className="sort-menu__content">
        <Link to="/ABV">
          <FilteredItem toggleFilter={toggleFilter} filterTerm={"ABV%"}/>
        </Link>

        <Link to="/pH">
          <FilteredItem toggleFilter={toggleFilter} filterTerm={"pH"}/>
        </Link>
        <Link to="/brewed">
          <FilteredItem toggleFilter={toggleFilter} filterTerm={"Brew Date"}/>
        </Link>
      </div>
    </div>
  )
}

export default FilterList