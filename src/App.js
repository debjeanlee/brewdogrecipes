import Navigation from './navigation/Navigation';
import axios from 'axios'
import React, {useState, useEffect} from 'react'


function App() {

  const [ beer, setBeer ] = useState({});

  useEffect(() => {
      getBeerData();
  }, [])
  
  async function getBeerData(){
      try {
          let result = await axios.get(`https://api.punkapi.com/v2/beers`);
          setBeer(result); 
      } catch (err) {
          console.log(err);
      }
  } 
  
  
  console.log(beer);

  return (
    <div>
      <Navigation />

    </div>
  );
}

export default App;
