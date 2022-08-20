import {useEffect, useState} from 'react';
import './App.css';
import ABVfilter from "/home/lesly/nology/beer-website/src/containers/ABVfilter/ABVfiler.jsx"
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
 
  

 

  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Home beers={beers} />} />
          <Route 
            path="/ABV"
            element={<ABVfilter />} />
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