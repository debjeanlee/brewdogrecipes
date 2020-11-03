import React from 'react'
import { Col, Jumbotron } from 'react-bootstrap'

function ColumnThree({ beer }) {
    
    console.log(beer);

    return (
        <Col md={4} sm={6} className="mx-auto">
             <h3>PACKAGING</h3>
            <Jumbotron className="pt-4 pb-3"
            style={{
                backgroundImage: `url(${beer.image_url})`, 
                backgroundSize: `35%`, 
                height: `500px`, 
                backgroundRepeat: `no-repeat`, 
                backgroundPosition: `center` 
                }}>
            </Jumbotron>
        
            <h3>BREWER'S TIP</h3>
            <Jumbotron className="pt-4 pb-3">
                {beer.brewers_tips}
            </Jumbotron>
            
        </Col>
    )
}

export default ColumnThree
