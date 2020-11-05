import React from 'react'
import { Row, Container } from 'react-bootstrap';
import BeerCard from '../beers/BeerCard'


function Results({searchResults, setSingleBeer }) {

    let res = searchResults;

    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <h1>Search results..</h1>
                </Row>
            </Container>
            <Row className="m-auto col-9">
                {res.map((el) => (
                        <BeerCard 
                        beer={el} 
                        key={el.id} 
                        setSingleBeer={setSingleBeer}
                        />
                        ))}
            </Row>
        </div>
    )
}

export default Results
