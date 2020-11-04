import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ID from '../beers/ID'

function RandomBeer(props) {

    return (
        <Container>
            <Row className="d-flex">
                <Col>
                    <ID beer={props.beer}/>
                </Col>
                <Col md={1}>
                    <Button className="mt-5" variant="info" size="lg" onClick={props.getRandom} >ANOTHER</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RandomBeer
