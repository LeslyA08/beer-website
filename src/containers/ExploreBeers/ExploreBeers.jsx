import {useState} from 'react';
import BeerCard from "../../components/BeerCard/BeerCard"
import SearchBar from "../../components/SearchBar/SearchBar"

const ExploreBeers = (props) => {
    const {beers} = props;
    const [searchTerm, setSearchTerm] = useState("")

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    };
    const filteredBeers = beers.filter((beer) => {
        const beersTitleLower = beer.name.toLowerCare();

        return beersTitleLower.includes(searchTerm)
    })

    return (
        <>
        <SearchBar
        label={"Beers"}
        searchTerm={searchTerm}
        handleInpute={handleInput}
        />
        <BeerCard beers={filteredBeers}/>
        </>
    )
}

export default ExploreBeers;