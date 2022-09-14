import './App.scss';
import Main from './Containers/Main/Main';
import Nav from './Containers/Nav/Nav';
import { useState, useEffect } from 'react';

function App() {
  const [beers, setBeers] = useState([])
  const [searchTerm, setSearchTerm] = useState("");


  const getBeer = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    setBeers(data);
console.log(data);
  }

  useEffect(() => {
    getBeer();
  },[])

  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
    console.log(searchTerm);
};

const searchedBeer = beers.filter((beer)=>{
  const beerName = beer.name.toLowerCase();
  return beerName.includes(searchTerm);
})

  // const brewDog =  
  // console.log(brewDog);


  return (
    <div className="App">
      <header className='title'>BrewDog</header>
      <Nav beers={beers} handleInput={handleInput} searchTerm={searchTerm} searchedBeer={searchedBeer}/>
      <Main getBeer={getBeer}  beers={beers} searchedBeer={searchedBeer}/>      
    </div>
  );
}

export default App;
