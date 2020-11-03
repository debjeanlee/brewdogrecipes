import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from './axios.js'


function ID() {

    const {id} = useParams();
    
    const [ beer, setBeer ] = useState({});

    useEffect(() => {
  
        async function getBeerData(){
          const result = await axios.get(`?ids=${id}`);
          setBeer(result.data[0]);
          }
        
        getBeerData();
      
    }, [])


    return (
        <div>
            <h1>ONE BEER</h1>
            Name: {beer.name} <br />
            Tagline: {beer.tagline} <br />
            MAKE COMPONENTS FOR DIFFERENT PARTS TMD
        </div>
    )
}

export default ID
