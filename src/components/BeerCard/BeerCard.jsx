import "./BeerCard.scss"
import BeerButton from "../BeerButton/BeerButton"
import InfoCard from "../InfoCard/InfoCard"
import InfoContainer from "../InfoContainer/InfoContainer"

const BeerCard = (props) => {
    return (
    <div className="beer-card">
      <h2>{props.name}</h2> 
      <img src={props.image_url} alt={props.name} className="beer-img" />
        <p>ABV: {props.abv}</p>
        <BeerButton onClick={InfoContainer}/>
    </div>
    )
}

export default BeerCard;
    

      