import "./ABVRangedSlider.scss";

import React from 'react'

const ABVRangedSlider = ({getSliderValue}) => {


  return (
    <input onChange={getSliderValue} type="range" min="1" max="50" step="1" value="14"/>
  )
}

export default ABVRangedSlider