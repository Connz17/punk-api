import "./Nav.scss";
import { useState } from "react";
import React from 'react'
import SearchBox from "../../Components/SearchBox/SearchBox";
import FilterList from "../../Components/FilterList/FilterList";


const Nav = ({beers}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    const handleInput = (event) => {
        const userInput = event.target.value.toLowerCase();
        setSearchTerm(userInput);
    };

    const searchedBeer = beers.filter((beer)=>{
        const beerName = beer.name.toLowerCase();
        return beerName.includes(searchTerm) && beer.image_url;
    })

    const toggleFilter = () => {
        setShowFilter(!showFilter);
      };
    


  return (
    <div className="navBar">
    <div>
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} searchedBeer={searchedBeer}/>
    </div>
    <div>
        <h2 onClick={toggleFilter}>Filters</h2>
        {showFilter && <FilterList toggleFilter={toggleFilter}/>}
    </div>
    </div>
  )
}

export default Nav