import "./SortedMain.scss";
import SortedList from "../SortedList/SortedList";
import React from 'react'
import Slider from "../../Components/Slider/Slider";



const SortedMain = ({beers, getSliderValue, sliderValue, term,}) => {
  return (
    <div className="ph-main">
        <h3>Currently showing {term}{sliderValue} and below</h3>
        <Slider getSliderValue={getSliderValue}/>
        <SortedList beers={beers}/>
    </div>
  )
}

export default SortedMain