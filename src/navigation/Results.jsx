import React from 'react'
import { Row, Container } from 'react-bootstrap';
import BeerCard from '../beers/BeerCard'


function Results({searchResults, setSingleBeer }) {

    let res = searchResults;

    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <h1>Search results</h1>
                </Row>
            </Container>
            <Row className="m-auto col-9">
                {(res.length > 0) ?
                (res.map((el, i) => (
                        <BeerCard 
                        beer={el} 
                        key={"res" + i} 
                        setSingleBeer={setSingleBeer}
                        />
                    )))
                    :
                    <h4>No items matched your search..</h4>
                    }
            </Row>
        </div>
    )
}

export default Results
