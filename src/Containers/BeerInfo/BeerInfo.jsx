import "./BeerInfo.scss"
import React from 'react'
import { useParams } from "react-router"

const BeerInfo = ({beers}) => {

const {beerId} = useParams()
console.log(beerId);

console.log(beers[0]);

const clickedBeer = beers.filter((beer) => beer.id === beerId);
console.log(clickedBeer[0]);

  return (
    <>

    </>
  )
}

export default BeerInfo