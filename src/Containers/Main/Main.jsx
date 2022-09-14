import "./Main.scss";

import React from 'react'
import CardList from "../../Components/CardList/CardList";

const Main = ({searchedBeer}) => {



  return (
    <div className="main" >
        <CardList searchedBeer={searchedBeer}/>
    </div>
  )
}

export default Main