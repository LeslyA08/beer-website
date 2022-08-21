import {useEffect, useState} from 'react';
import './App.css';
import ExploreBeers from './containers/ExploreBeers/ExploreBeers';
import Home from "./containers/Home/Home"
import Nav from "./components/Nav/Nav"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
 
  
const highestRating = beers.filter(beer => beer.abv < 6).sort((a,b) => b.abv - a.abv);


const oldestDate = beers.filter(beer => (parseInt(beer.first_brewed.split("/")[1])) < 2011);

const highestAcidity = beers.filter(beer => beer.ph < 4).sort((a,b) => a.ph - b.ph);
 

  return (
    <Router>
      <Nav />
      <Routes>
        <Route 
          path="/"
          element={<Home beers={beers} />} />
        <Route 
          path="/ABV"
          element={<ExploreBeers key="abv" beers={highestRating}/>} />
        <Route 
        path="/Classic"
        element={<ExploreBeers key="classic" beers={oldestDate}/>}/>
        <Route 
          path="/Acidity"
          element={<ExploreBeers key="acidity" beers={highestAcidity}/>}/>
      </Routes>
    </Router>
  )
}

export default App;

/*
  
   <div>
      {beers &&<BeersContainer beers={beers}/>}
      </div>*/