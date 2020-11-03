import React from 'react'
import { Container, Row } from 'react-bootstrap';
import BeerCard from './BeerCard';

function BeerList(props) {
   
    let beers = props.beer;

    return (
            <Row className="m-auto col-9">
                {beers.map((el) => (
                    <BeerCard beer={el} key={el.id} setSingleBeer={props.setSingleBeer}/>
                    ))}
            </Row>

    )
}

export default BeerList
