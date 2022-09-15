import './App.scss';
import Main from './Containers/Main/Main';
import Nav from './Containers/Nav/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import SortedMain from './Containers/SortedMain/SortedMain';
import BeerInfo from './Containers/BeerInfo/BeerInfo';
import DateSortedMain from './Containers/DateSortedMain/DateSortedMain';
import ABVSortedMain from './Containers/ABVSortedMain/ABVSortedMain';

function App() {
  const [beers, setBeers] = useState([])
  const [abvArr, setAbvArr] = useState([])
  const [brewDateArr, setBrewDateArr] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [abvValue, setAbvValue] = useState(14);
  const [brewDateValue, setBrewDateValue] = useState(2012);
  const [phValue, setPhValue] = useState();




  const allBeers = async () => {

    let beerArray = [];
    for (let index = 1; index < 6; index++) {
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${index}&per_page=80`);
      const data = await res.json();
      Array.prototype.push.apply(beerArray, data);
    }
    setBeers(beerArray);
  }


//use slider to get and set value of ABV percentage
  const getHighABV = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?abv_gt=${abvValue}`);
    const data = await res.json();
    setAbvArr(data);
  }

  const getBrewDate = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?brewed_before=01-${brewDateValue}`);
    const data = await res.json();
    setBrewDateArr(data);
  }

  // filter out beers with no image
  const beerArr = beers.filter((drink)=> drink.image_url)

  const sortedABV = abvArr.filter((drink)=> drink.image_url).sort((a, b) => b.abv - a.abv)

  const sortedPh = beerArr.filter((drink)=> drink.image_url).sort((a, b) => b.ph - a.ph)

  const sortedDate = brewDateArr.filter((drink)=> drink.image_url).sort((a, b) => a.first_brewed - b.first_brewed)

  useEffect(() => {
    getHighABV();
    getBrewDate();
    allBeers();
  },[abvValue, brewDateValue])


  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
};

// turn the search functions into one pure function that takes variables as arguments
const searchedBeer = beerArr.filter((beer)=>{
  const beerName = beer.name.toLowerCase();
  return beerName.includes(searchTerm);
})

const searchedABV = sortedABV.filter((beer)=>{
  const beerName = beer.name.toLowerCase();
  return beerName.includes(searchTerm);
})

const searchedBrewDate = sortedDate.filter((beer)=>{
  const beerName = beer.name.toLowerCase();
  return beerName.includes(searchTerm);
})

const searchedPh = sortedPh.filter((beer)=>{
  const beerName = beer.name.toLowerCase();
  return beerName.includes(searchTerm);
})

// const phBeer = sortedPh.filter((beer)=>{
//   const beerPH = beer.ph * 10
//   return beerPH.includes(phValue);
// })

const getAbvValue = (event) => {
  setAbvValue(event.target.value);
}

const getBrewDateValue = (event) => {
  setBrewDateValue(event.target.value);
}

const getPhValue = (event) => {
  setPhValue(event.target.value);
  console.log(phValue);
}

// setBeers(urlWithParams.filter(beer) => beer.ibu <= slider)


  return (
  <Router>
    <div className="App">
      <Link to="/" className='title'>BrewDog</Link>
      <Nav beers={beers} handleInput={handleInput} searchTerm={searchTerm} searchedBeer={searchedBeer}/>
      <Routes>
      <Route path="/beer/:beerId"
      element={
        <BeerInfo beers={searchedBeer}/>
      }
      ></Route>
      <Route path="/ABV"
      element={
        <ABVSortedMain term={"ABV of "} getSliderValue={getAbvValue} beers={searchedABV} sliderValue={abvValue}/>
      }
      ></Route>
      <Route path="/pH"
      element={
        <SortedMain getSliderValue={getPhValue} beers={searchedPh}/>
      }
      ></Route>
      <Route path="/brewed"
      element={
        <DateSortedMain term={"beers brewed before "} getSliderValue={getBrewDateValue} beers={searchedBrewDate} sliderValue={brewDateValue}/>
      }
      ></Route>
        <Route path="/"
        element={
        <Main searchedBeer={searchedBeer}/> 
        }></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
