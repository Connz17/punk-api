import "./ABVSortedMain.scss";
import SortedList from "../SortedList/SortedList";
import React from 'react'
import ABVRangedSlider from "../../Components/ABVRangedSlider/ABVRangedSlider";



const ABVSortedMain = ({beers, getSliderValue, sliderValue, term}) => {
  return (
    <div className="abv-main">
        <h3>Currently showing {term}{sliderValue}% and above</h3>
        <ABVRangedSlider getSliderValue={getSliderValue}/>
        <SortedList beers={beers}/>
    </div>
  )
}

export default ABVSortedMain