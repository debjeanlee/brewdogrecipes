import React from 'react'
import { Col, Jumbotron } from 'react-bootstrap'

function ColumnThree() {
    return (
        <Col md={4} sm={6} className="mx-auto">
             <h3>PACKAGING</h3>
            <Jumbotron>
                
            </Jumbotron>
        
            <h3>BREWER'S TIP</h3>
            <Jumbotron>
                <h1>This is col 1</h1>
            </Jumbotron>
            
        </Col>
    )
}

export default ColumnThree
