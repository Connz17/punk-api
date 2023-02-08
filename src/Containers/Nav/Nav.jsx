import "./Nav.scss";
import { useState } from "react";
import React from 'react'
import SearchBox from "../../Components/SearchBox/SearchBox";
import FilterList from "../../Components/FilterList/FilterList";


const Nav = ({handleInput, searchedBeer}) => {
    const [showFilter, setShowFilter] = useState(false);





    const toggleFilter = () => {
        setShowFilter(!showFilter);
        console.log("click");
      };
    


  return (
    <div className="navBar">
    <div>
        <SearchBox handleInput={handleInput} searchedBeer={searchedBeer}/>
    </div>
    
        <h2 className="filter-options" onClick={toggleFilter} >Sort Options:</h2>
        {showFilter && <FilterList toggleFilter={toggleFilter}/>}
    
    </div>
  )
}

export default Nav