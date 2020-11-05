import React from 'react'
import { Row } from 'react-bootstrap';
import BeerCard from '../beers/BeerCard'

function Results({searchResults, setSingleBeer}) {

    console.log("res in res:", searchResults);

    let res = searchResults;

    return (
        <div>
            RESULTS HERE
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
