import Navigation from './navigation/Navigation';
import axios from './axios.js'
import React, {useState, useEffect} from 'react'


function App() {

  const [ beer, setBeer ] = useState({});

  useEffect(() => {
  
      async function getBeerData(){
        const result = await axios.get(`?page=1`);
        setBeer(result.data);
        }

      getBeerData();
  }, [])
  

  console.log(beer);

  return (
    <div>
      <Navigation />

    </div>
  );
}

export default App;
