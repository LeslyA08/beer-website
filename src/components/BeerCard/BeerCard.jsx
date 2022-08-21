import "./BeerCard.scss"
import {useState} from 'react'

const BeerCard = (props) => {

  const [flip, setFlip] = useState(false)

    return (
    <div className={ `card ${flip ? "flip" : ""}`}>
      <div className="front" onClick={()=> setFlip(!flip)}>
      <h2>{props.name}</h2> 
      <img src={props.image_url} alt={props.name} className="beer-img" />
        <p>ABV: {props.abv}</p>
        <p>{props.ph}</p>
      </div>
      <div className="back" onClick={()=> setFlip(!flip)}>
      <h2>{props.name}</h2> 
      <h3>{props.tagline}</h3>
      <p>{props.description}</p>
      <p>{props.first_brewed}</p>
      </div>
    </div>
    )
}

export default BeerCard;
    

      