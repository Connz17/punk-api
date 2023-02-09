import './App.scss';
import Main from './Containers/Main/Main';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import SortedMain from './Containers/SortedMain/SortedMain';
import BeerInfo from './Containers/BeerInfo/BeerInfo';
import DateSortedMain from './Containers/DateSortedMain/DateSortedMain';
import ABVSortedMain from './Containers/ABVSortedMain/ABVSortedMain';
import BottomBanner from './Components/BottomBanner/BottomBanner';
import logo from "../src/assets/images/585e65d22.png"
import IBUSortedMain from './Containers/IBUSortedMain/IBUSortedMain';

function App() {
  const [beers, setBeers] = useState([])

  const [searchTerm, setSearchTerm] = useState("");
  const [abvValue, setAbvValue] = useState(14);
  const [ibuValue, setIbuValue] = useState(50);
  const [phValue, setPhValue] = useState(3);


  const allBeers = async () => {
    let beerArray = [];
    for (let index = 1; index < 6; index++) {
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${index}&per_page=80`);
      const data = await res.json();
      Array.prototype.push.apply(beerArray, data);
    }
    setBeers(beerArray);
  }

  useEffect(() => {
    allBeers();
  },[])

// filter out beers with no image
  const beerArr = beers.filter((drink)=> drink.image_url)

//Sort beers by value
  const sortedABV = beerArr.sort((a, b) => b.abv - a.abv)
  const sortedPh = beerArr.sort((a, b) => b.ph - a.ph)
  const sortedIBU = beerArr.sort((a, b) => a.ibu - b.ibu)

//User search input
  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
};

// turn the search functions into one pure function that takes variables as arguments
const searchedBeer = beerArr.filter((beer)=>{
  const foodPairings = beer.food_pairing.join()
  const beerName = beer.name.toLowerCase();
  const yearBrewed = beer.first_brewed.substring(beer.first_brewed.length -4)
  return beerName.includes(searchTerm) || foodPairings.includes(searchTerm) || yearBrewed.includes(searchTerm);
})


//Set slider values
const getAbvValue = (event) => {
  setAbvValue(event.target.value);
}
const getPhValue = (event) => {
  setPhValue(event.target.value);
}
const getIbuValue = (event) => {
  setIbuValue(event.target.value);
}

//Filter beers based on slider
const filteredPh = sortedPh.filter((beer) => beer.ph <= phValue)
const filteredABV = sortedABV.filter((beer) => beer.abv >= abvValue)
const filteredIBU = sortedIBU.filter((beer) => beer.ibu >= ibuValue)

//Filter based on brew date
const filteredDate = beerArr.filter((beer) => {
  const yearBrewed = beer.first_brewed.substring(beer.first_brewed.length -4) 
  const brewedDare = parseInt(yearBrewed) 
    return brewedDare <= 2010
})




  return (
  <Router>
    <div className="App">
      <div className='title'>
        <Link to="/"><img className='title__image' src={logo} alt="" /></Link>
      </div><br />
      <Routes>
      <Route path="/beer/:beerId"
      element={
        <BeerInfo beers={searchedBeer}/>
      }
      ></Route>
      <Route path="/ABV"
      element={
        <ABVSortedMain term={"ABV of "} getSliderValue={getAbvValue} beers={filteredABV} sliderValue={abvValue}/>
      }
      ></Route>
      <Route path="/IBU"
      element={
        <IBUSortedMain term={"IBU of "} getSliderValue={getIbuValue} beers={filteredIBU} sliderValue={ibuValue}/>
      }
      ></Route>
      <Route path="/pH"
      element={
        <SortedMain getSliderValue={getPhValue} beers={filteredPh} term={"pH of "} sliderValue={phValue}/>
      }
      ></Route>
      <Route path="/brewed"
      element={
        <DateSortedMain beers={filteredDate} />
      }
      ></Route>
        <Route path="/"
        element={
        <Main handleInput={handleInput} searchedBeer={searchedBeer}/> 
        }></Route>
      </Routes>
      <footer className="footer">
        <BottomBanner />
      </footer>
    </div>
  </Router>
  );
}

export default App;
