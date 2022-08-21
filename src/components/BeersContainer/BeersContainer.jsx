import BeerCard from "../BeerCard/BeerCard";
import "./BeersContainer.scss";

const BeersContainer = (props) => {
    return (
        <div className="card-grid">
            {props.beers.map((beer) => {
            return <BeerCard
            name={beer.name} 
            image_url={beer.image_url}
            abv= {beer.abv}
            tagling={beer.tagline}
            description={beer.description}
            first_brewed={beer.first_brewed}
            />
})}         
        </div>
        
    )
}

export default BeersContainer; 