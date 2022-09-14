import "./SortedMain.scss";
import "../Main/Main.scss";
import SortedList from "../SortedList/SortedList";
import React from 'react'



const SortedMain = ({beers}) => {
  return (
    <div className="main">
        <input type="range" />
        <SortedList beers={beers}/>
    </div>
  )
}

export default SortedMain