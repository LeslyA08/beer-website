import {useState} from 'react';
import SearchBar from "../../components/SearchBar/SearchBar"
import BeerContainer from "../../components/BeersContainer/BeersContainer"

const ExploreBeers = (props) => {
    const {beers} = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    };
    const filteredBeers = beers.filter((beer) => {
        const beersTitleLower = beer.name.toLowerCase();

        return beersTitleLower.includes(searchTerm) && beer.name;
    })

    return (
        <>
        <SearchBar
        label={"Beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
        />
        <BeerContainer beers={filteredBeers}/>
        </>
    )
}

export default ExploreBeers;