import "./DateRangedSlider.scss";

import React from 'react'

const DateRangedSlider = ({getSliderValue}) => {


  return (
    <input onChange={getSliderValue} type="range" min="2008" max="2022" step="1" value="2012"/>
  )
}

export default DateRangedSlider