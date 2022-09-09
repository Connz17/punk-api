import "./Nav.scss";

import React from 'react'
import SearchBox from "../../Components/SearchBox/SearchBox";
import FilterList from "../../Components/FilterList/FilterList";

const Nav = () => {
  return (
    <>
    <div>Nav
        <SearchBox />
    </div>
    <div>
        <FilterList />
    </div>
    </>
  )
}

export default Nav