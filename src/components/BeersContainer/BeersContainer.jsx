import BeerCard from "../BeerCard/BeerCard";
import "./BeersContainer.scss";

const BeersContainer = ({beers}) => {
    return (
        <div>
            {beers.map((beer) =>(
            <BeerCard
            name={beer.name} 
            image_url={beer.image_url}
            abv= {beer.abv}
            />
            ))}
        </div>
    )
}

export default BeersContainer; 