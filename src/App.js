import Navigation from './navigation/Navigation';
import axios from './axios.js'
import React, {useState, useEffect} from 'react'


function App() {

  const [ beer, setBeer ] = useState({});

  useEffect(() => {
    let count = 1;

      async function getBeerData(){
        const result = await axios.get(`?page=${count}`);
        setBeer(result.data);
        }
      
      getBeerData();
    
  }, [])
  

  console.log(beer);

  return (
    <div>
      <Navigation />
      <ul>
        {beer.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
