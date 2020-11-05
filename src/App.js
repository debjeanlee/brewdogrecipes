import Navigation from './navigation/Navigation';
import React, { useState, useEffect } from 'react'
import Axios from 'axios';


function App() {

    const apiUrl="https://api.punkapi.com/v2/beers";
    const [ allBeer, setAllBeer ] = useState([]);
    const [ random, setRandom ] = useState({});
  
    
    const getBeers = async function(pageNo = 1) {
        let actualUrl = apiUrl + `?page=${pageNo}`;
        var apiResults = await fetch(actualUrl)
        .then(resp=>{
        return resp.json();
        });
        return apiResults;
    }
    
    const getAllBeer = async function(pageNo = 1) {
      const results = await getBeers(pageNo);
      console.log("Retreiving data from API for page : " + pageNo);
      if (results.length>0) {
        return results.concat(await getAllBeer(pageNo+1));
      } else {
        return results;
      }
    };

    useEffect(() => {
      const setAll = async function(){
          const result = await getAllBeer();
          setAllBeer(result);
      }
      setAll();
    }, [])
  
    // console.log("aapp", random);
    // console.log("all beer", allBeer);
    
  return (
    <div>
      <Navigation 
      allBeer={allBeer} 
      random={random} 
      setRandom={setRandom} 
      />
    </div>
  );
}

export default App;
