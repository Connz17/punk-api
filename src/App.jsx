import './App.scss';
import Main from './Containers/Main/Main';
import Nav from './Containers/Nav/Nav';
import { useState } from 'react';

function App() {

  const [beers, setBeers] = useState([])

  const getBeer = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    setBeers(data);
console.log(data);
  }





  // const brewDog =  
  // console.log(brewDog);


  return (
    <div className="App">
      <header className='title'>BrewDog</header>
      <Nav beers={beers}/>
      <Main getBeer={getBeer}  beers={beers}/>      
    </div>
  );
}

export default App;
