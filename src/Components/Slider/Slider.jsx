import "./Slider.scss";

import React from 'react'

const Slider = ({getSliderValue}) => {


  return (
    <input onChange={getSliderValue} type="range" min="0.1" max="7" step="0.1" value="3"/>
  )
}

export default Slider