import "./Nav.scss";

import React from 'react'
import SearchBox from "../../Components/SearchBox/SearchBox";
import FilterList from "../../Components/FilterList/FilterList";

const Nav = () => {
  return (
    <div className="navBar">
    <div>Nav
        <SearchBox />
    </div>
    <div>
        <FilterList />
    </div>
    </div>
  )
}

export default Nav