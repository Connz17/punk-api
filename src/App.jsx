import './App.scss';
import Main from './Containers/Main/Main';
import Nav from './Containers/Nav/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import SortedMain from './Containers/SortedMain/SortedMain';
import BeerInfo from './Containers/BeerInfo/BeerInfo';

function App() {
  const [beers, setBeers] = useState([])
  const [abvArr, setAbvArr] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [abvValue, setAbvValue] = useState(14);


  const getBeer = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    setBeers(data);
console.log(data);
  }

//use slider to get and set value of ABV percentage
  const getHighABV = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?abv_gt=${abvValue}`);
    const data = await res.json();
    setAbvArr(data);
    console.log(data);
  }
  const sortedABV = abvArr.filter((drink)=> drink.image_url).sort((a, b) => b.abv - a.abv)

  const sortedPh = beers.filter((drink)=> drink.image_url).sort((a, b) => b.ph - a.ph)

  const sortedDate = beers.filter((drink)=> drink.image_url).sort((a, b) => a.first_brewed - b.first_brewed)



  useEffect(() => {
    getBeer();
    getHighABV();
  },[abvValue])



  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
    console.log(searchTerm);
};

const searchedBeer = beers.filter((beer)=>{
  const beerName = beer.name.toLowerCase();
  return beerName.includes(searchTerm);
})

const getAbvValue = (event) => {
  setAbvValue(event.target.value);
}


  return (
  <Router>
    <div className="App">
      <Link to="/" className='title'>BrewDog</Link>
      <Nav beers={beers} handleInput={handleInput} searchTerm={searchTerm} searchedBeer={searchedBeer}/>
      <Routes>
      <Route path="/beer/:beerId"
      element={
        <BeerInfo beers={beers}/>
      }
      ></Route>
      <Route path="/ABV"
      element={
        <SortedMain term={"% ABV and above"} getSliderValue={getAbvValue} beers={sortedABV} sliderValue={abvValue}/>
      }
      ></Route>
      <Route path="/pH"
      element={
        <SortedMain beers={sortedPh}/>
      }
      ></Route>
      <Route path="/brewed"
      element={
        <SortedMain beers={sortedDate}/>
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
