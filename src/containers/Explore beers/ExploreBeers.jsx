import {useState} from 'react';
import BeerCard from "../../components/BeerCard/BeerCard"
import SearchBar from "../../components/SearchBar/SearchBar"

const ExploreBeers = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    };

    return (
        <>
        <SearchBar
        label={"Beers"}
        searchTerm={searchTerm}
        handleInpute={handleInput}
        />
        <BeerCard />
        </>
    )
}

export default ExploreBeers;