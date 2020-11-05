import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ID from '../beers/ID'
import Axios from 'axios'

function RandomBeer({ beer, getNewBeer }) {

    // console.log(allBeer);

    // console.log("beer in random:", beer);


    return (
        <Container>
            <Row className="d-flex">
                <Col>
                    <ID beer={beer}/>
                </Col>
                <Col md={1}>
                    <Button className="mt-5" variant="info" size="lg" onClick={getNewBeer} >ANOTHER</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RandomBeer
