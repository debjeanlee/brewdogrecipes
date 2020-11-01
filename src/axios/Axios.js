import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Axios() {

const [ beer, setBeer ] = useState({});

useEffect(() => {
    getBeerData();
}, [])

async function getBeerData(){
    try {
        let result = await axios.get(`https://api.punkapi.com/v2/beers`);
        setBeer(result.data); 
    } catch (err) {
        console.log(err);
    }
} 


console.log(beer);

    return (
        <div>
            
        </div>
    )
}

export default Axios
