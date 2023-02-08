import "./Main.scss";

import React from 'react'
import CardList from "../../Components/CardList/CardList";
import Nav from "../Nav/Nav";

const Main = ({searchedBeer, handleInput}) => {



  return (
    <div className="main" >
      <Nav handleInput={handleInput} searchedBeer={searchedBeer}/> <br />
      <CardList searchedBeer={searchedBeer}/>
    </div>
  )
}

export default Main