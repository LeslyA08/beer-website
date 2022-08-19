import {useEffect, useState} from 'react';
import './App.css';
import Nav from "/home/lesly/nology/beer-website/src/components/Nav/Nav";
import BeersContainer from "./components/BeersContainer/BeersContainer";
import InfoCard from "./components/InfoCard/InfoCard";
import BeerButton from "./components/BeerButton/BeerButton"



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
      <div>
      {beers &&<BeersContainer beers={beers}/>}
      </div>
      <BeerButton onClick={InfoCard}/>
    </div>
  );
}

export default App;
