import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import BeerCard from './BeerCard';

function BeerList(props) {
   
    let allBeer = props.allBeer;

    const [ active, setActive ] = useState(1);
    let pageBtn = [];

    console.log("beerlist: ", allBeer.length);

    

    return (
            <Row className="mx-auto">
                {allBeer.map((el) => (
                    <BeerCard 
                    beer={el} 
                    key={el.id} 
                    setSingleBeer={props.setSingleBeer}
                    className="mx-auto"
                    />
                    ))}
            </Row>

    )
}

export default BeerList
