import {useEffect, useState} from 'react';
import './App.css';
import ExploreBeers from './containers/ExploreBeers/ExploreBeers';
import Home from "./containers/Home/Home"

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
 

  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Home beers={beers} />} />
          <Route 
            path="/ABV"
            element={<ExploreBeers beers={highestRating}/>} />
            <Route 
              path="/ClassicRange"
              element={null} />
              <Route 
                path="/Acidity"
                elemtn={null}/>
      </Routes>
    </Router>
  )
}

export default App;

/*
  
   <div>
      {beers &&<BeersContainer beers={beers}/>}
      </div>*/