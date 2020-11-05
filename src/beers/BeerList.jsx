import React from 'react'
import { Row } from 'react-bootstrap';
import BeerCard from './BeerCard';

function BeerList(props) {
   
    let allBeer = props.allBeer;

    return (
            <Row className="m-auto col-9">
                {allBeer.map((el) => (
                    <BeerCard 
                    beer={el} 
                    key={el.id} 
                    setSingleBeer={props.setSingleBeer}
                    />
                    ))}
            </Row>

    )
}

export default BeerList
