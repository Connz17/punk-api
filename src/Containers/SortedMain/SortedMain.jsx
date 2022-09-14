import "./SortedMain.scss";
import "../Main/Main.scss";
import SortedList from "../SortedList/SortedList";
import React from 'react'
import Slider from "../../Components/Slider/Slider";



const SortedMain = ({beers, getSliderValue, sliderValue, term}) => {
  return (
    <div className="main">
        <h3>Currently showing {sliderValue}{term} beer</h3>
        <Slider getSliderValue={getSliderValue}/>
        <SortedList beers={beers}/>
    </div>
  )
}

export default SortedMain