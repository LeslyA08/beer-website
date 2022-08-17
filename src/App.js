import './App.css';
import {useEffect, useState} from 'react';
import Nav from "/home/lesly/nology/beer-website/src/components/Nav/Nav";
import BeerCard from "./components/BeerCard/BeerCard";
import BeersContainer from "./components/BeersContainer/BeersContainer";
import beers from "./data/beers"


function App() {
  const mappedBeers = beers.map(beer => {
    return <BeerCard beer = {beer} />
  })

 /*const [beers, setBeers] = useState ([])

 
  //fetch api data
  const getBeers = () => {
    fetch ("https://api.punkapi.com/v2/ ")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setBeers(data.results)
    })
  }

  useEffect(() => {
    getBeers()
  }, []) ;*/


  return (
    <div>
     <Nav />
     <div>
      {mappedBeers}
     </div>
    </div>
  );
}

export default App;
/*<Nav />
     <BeersContainer beers={beers} />*/
     /*{beers.map((beer) => (
      <p>{beer.id}</p>
     ))} */