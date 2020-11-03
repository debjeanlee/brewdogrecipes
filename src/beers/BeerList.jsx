import React from 'react'
import { Container, Row } from 'react-bootstrap';
import BeerCard from './BeerCard';

function BeerList(props) {
   
    let beers = props.beer;

    return (
        <Container>
            <Row>
                {beers.map((el) => (
                    <BeerCard beer={el} key={el.id} setSingleBeer={props.setSingleBeer}/>
                    ))}
            </Row>
        </Container>

    )
}

export default BeerList
