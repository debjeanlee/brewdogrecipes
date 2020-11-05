import React from 'react'
import { Row } from 'react-bootstrap';
import BeerCard from '../beers/BeerCard'

function Results({searchResults, setSingleBeer }) {

    let res = searchResults;

    return (
        <div>
            <h1>Search results..</h1>
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
