import React from 'react'
import { Container, Row } from 'react-bootstrap';
import BeerCard from '../components/BeerCard';

function BeerList(props) {
   
    let beers = props.beer;

    return (
        <Container>
            <Row>
                {beers.map((el) => (
                    <BeerCard beer={el} key={el.id} />
                    ))}
            </Row>
        </Container>

    )
}

export default BeerList
