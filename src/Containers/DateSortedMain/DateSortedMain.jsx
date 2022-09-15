import "./DateSortedMain.scss";
import "../Main/Main.scss";
import SortedList from "../SortedList/SortedList";
import React from 'react'
import DateRangedSlider from "../../Components/DateRangedSlider/DateRangedSlider";



const DateSortedMain = ({beers, getSliderValue, sliderValue, term, handleUserSearch}) => {
  return (
    <div className="main">
        <h3>Currently showing {term}{sliderValue}</h3>
        <DateRangedSlider getSliderValue={getSliderValue}/>
        <SortedList beers={beers} handleUserSearch={handleUserSearch}/>
    </div>
  )
}

export default DateSortedMain