import React from 'react'
import { Jumbotron, Row } from 'react-bootstrap'

function Header({ id, name, date }) {

    
    return (
        <Jumbotron>
            <Row className="d-flex justify-content-between">
                <h3>#{id}</h3>
                <h3 className="text-secondary">{date}</h3>
            </Row>
            <Row>
                <h1>{name}</h1>
            </Row>
        </Jumbotron>
    )
}

export default Header
