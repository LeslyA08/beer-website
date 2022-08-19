import {useEffect, useState} from 'react';
import './App.css';
import Nav from "/home/lesly/nology/beer-website/src/components/Nav/Nav";
import BeersContainer from "./components/BeersContainer/BeersContainer";
import InfoCard from "./components/InfoCard/InfoCard";
import BeerButton from "./components/BeerButton/BeerButton"
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers"
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  
  const [beers, setBeers] = useState([]);


  //fetch api data
  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json()
    })
    .then(data => {
      setBeers(data)
    })
  }
  useEffect(() => {
    getBeers()
  }, []);
 
 

  return (
    <div>
      <Nav />
      {beers &&<ExploreBeers beers={beers}/>}
    </div>
  );
}

export default App;

/*<label>Search</label>
      <input type= "text" onChange={(event) => handleSearch(event)} />
       const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = beers.filter((data) => {
      return data.name.search(value) != 1;
    });
    setFilteredData(result);
      const highestABV = beers.filter(beer => beer.abv).sort((a, b) => b.abv - a.abv);
      
  const [filteredData, setFilteredData]=useState(beers)
  
   <div>
      {beers &&<BeersContainer beers={beers}/>}
      </div>*/