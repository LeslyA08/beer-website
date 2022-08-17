import "./BeerCard.scss"
import {useState} from 'react'

const BeerCard = (props) => {
    const { name , image_url, abv } = props.beer
    return (
    <div>
      <h2>{name}</h2> 
      <img src={image_url} alt={name} />
        <p>ABV: {abv}</p>
    </div>
    )
}

export default BeerCard;
    

      