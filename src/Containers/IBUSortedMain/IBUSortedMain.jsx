import IBUSlider from "../../Components/IBUSlider/IBUSlider";
import SortedList from "../SortedList/SortedList";
import "./IBUSortedMain.scss";


const IBUSortedMain = ({beers, getSliderValue, sliderValue, term}) => {
  return (
    <div className="ibu-main">
        <h3>Currently showing {term}{sliderValue} and above</h3>
        <IBUSlider getSliderValue={getSliderValue}/>
        <SortedList beers={beers}/>
    </div>
  )
}

export default IBUSortedMain