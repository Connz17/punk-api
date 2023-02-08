import "./IBUSlider.scss";



const IBUSlider = ({getSliderValue}) => {
  return (
    <input onChange={getSliderValue} type="range" min="0" max="1200" step="2"/>
  )
}

export default IBUSlider