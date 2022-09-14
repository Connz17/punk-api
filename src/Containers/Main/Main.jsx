import "./Main.scss";

import React from 'react'
import CardList from "../../Components/CardList/CardList";

const Main = ({beers, searchedBeer}) => {



  return (
    <div className="main" >Main
        <CardList beers={beers} searchedBeer={searchedBeer}/>
    </div>
  )
}

export default Main