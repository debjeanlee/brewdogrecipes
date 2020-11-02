import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import PageList from '../components/PageList'
import axios from './axios.js'
import BeerList from './BeerList';

function ABV() {

    const [ beerPercentage, setByPercentage ] = useState([]);
    

    useEffect(() => {
  
        async function getBeerData(lessthan, morethan){
          const result = await axios.get(`?abv_lt=${lessthan}&abv_gt=${morethan}&per_page=80`);
          setByPercentage(result.data);
        }
        
        getBeerData(3,0);
        
    }, [])
    

    console.log("beerPercentage before sort:", beerPercentage);
    beerPercentage.sort(function(a, b){ return a.abv - b.abv });
    console.log("beerPercentage after sort:", beerPercentage);
    
    return (
        <div>
            <Row className="d-flex justify-content-around">
                <h1 className="text-center">ABV</h1>
            </Row>
            <BeerList beer={beerPercentage}/>
        </div>
    )
}

export default ABV
