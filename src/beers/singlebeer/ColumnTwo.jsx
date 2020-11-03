import React from 'react'
import { Col, Jumbotron } from 'react-bootstrap'

function ColumnTwo() {
    return (
        <Col md={4} sm={6} className="mx-auto">
            <h3>INGREDIENTS</h3>
            <Jumbotron>
                <h1>This is col 1</h1>
            </Jumbotron>
        
            <h3>FOOD PAIRING</h3>
            <Jumbotron>
                <h1>This is col 1</h1>
            </Jumbotron>
        </Col>
    )
}

export default ColumnTwo
