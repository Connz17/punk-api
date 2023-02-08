import "./Nav.scss";
import { useState } from "react";
import React from 'react'
import SearchBox from "../../Components/SearchBox/SearchBox";
import FilterList from "../../Components/FilterList/FilterList";


const Nav = ({handleInput, searchedBeer}) => {
    const [showFilter, setShowFilter] = useState(false);





    const toggleFilter = () => {
        setShowFilter(!showFilter);
      };
    


  return (
    <div className="navBar">
    <div>
        <SearchBox handleInput={handleInput} searchedBeer={searchedBeer}/>
    </div>
    
        <h2 className="filter-options" onClick={toggleFilter} >Sort By:</h2>
        <FilterList toggleFilter={toggleFilter} showFilter={showFilter}/>
    
    </div>
  )
}

export default Nav