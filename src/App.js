import './App.css';
import {useState} from 'react';


function App() {

  const [beers, setBeers] = useState ([])

  //fetch api data
  const getBeers = () => {
    fetch ("https://punkapi.com/")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setUsers(data.results)
    })
  };


  return (
    <div>
      
    </div>
  );
}

export default App;
