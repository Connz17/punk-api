import "./Slider.scss";

import React from 'react'

const Slider = ({getSliderValue}) => {


  return (
    <input onChange={getSliderValue} type="range" />
  )
}

export default Slider