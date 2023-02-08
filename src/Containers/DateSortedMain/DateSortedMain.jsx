import "./DateSortedMain.scss";
import "../Main/Main.scss";
import SortedList from "../SortedList/SortedList";
import React from 'react'



const DateSortedMain = ({beers}) => {
  return (
    <div className="ds-main">
        <h3>Currently showing beers brewed in 2010 and before</h3>
        <SortedList beers={beers}/>
    </div>
  )
}

export default DateSortedMain