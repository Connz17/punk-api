import "./Main.scss";

import React from 'react'
import CardList from "../../Components/CardList/CardList";

const Main = ({getBeer, beers}) => {



  return (
    <div className="main" onLoad={getBeer()}>Main
        <CardList beers={beers}/>
    </div>
  )
}

export default Main