import BeerCard from "../BeerCard/BeerCard";
import "./BeersContainer.scss";

const BeersContainer = (props) => {
    return (
        <div>
            {props.beers.map((beer) => {
            return <BeerCard
            name={beer.name} 
            image_url={beer.image_url}
            abv= {beer.abv}
            />
})}         
        </div>
        
    )
}

export default BeersContainer; 