import "./Nav.scss";
import { useState } from "react";
import React from 'react'
import SearchBox from "../../Components/SearchBox/SearchBox";
import FilterList from "../../Components/FilterList/FilterList";


const Nav = ({beers, handleInput, searchedBeer}) => {
    const [showFilter, setShowFilter] = useState(false);





    const toggleFilter = () => {
        setShowFilter(!showFilter);
      };
    


  return (
    <div className="navBar">
    <div>
        <SearchBox handleInput={handleInput} searchedBeer={searchedBeer}/>
    </div>
    <div>
        <h2 onClick={toggleFilter}>Filters</h2>
        {showFilter && <FilterList toggleFilter={toggleFilter}/>}
    </div>
    </div>
  )
}

export default Nav