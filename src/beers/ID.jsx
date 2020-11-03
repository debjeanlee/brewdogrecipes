import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from './axios.js'


function ID() {

    const {id} = useParams();
    
    const [ beer, setBeer ] = useState({});

    useEffect(() => {
  
        async function getBeerData(){
          const result = await axios.get(`?ids=${id}`);
          setBeer(result.data);
          }
        
        getBeerData();
      
    }, [])

    console.log(beer);

    return (
        <div>
            <h1>ONE BEER</h1>
        </div>
    )
}

export default ID
