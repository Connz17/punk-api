import "./BeerInfo.scss"
import React from 'react'
import { useParams } from "react-router";

const BeerInfo = ({beers}) => {
console.log(beers);

const {beerId} = useParams();
console.log(beerId);

const clickedBeer = beers.filter((beer) => beer.id == beerId)
  
console.log(clickedBeer);




  return (
    <>

    </>
  )
}

export default BeerInfo