import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ID from '../beers/ID'
import Axios from 'axios'

function RandomBeer({ beer, setRandom, allBeer }) {

    // console.log(allBeer);
    function getNewBeer(){
        let index = Math.floor(Math.random() * 326);
        setRandom(allBeer[index]);
    }
    console.log("beer in random:", beer);


    return (
        <Container>
            <Row className="d-flex">
                <Col>
                    <ID beer={beer}/>
                </Col>
                <Col md={1}>
                    <Button className="mt-5" variant="info" size="lg" >ANOTHER</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RandomBeer
