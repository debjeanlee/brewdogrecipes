import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
    return (
        <Container className="text-center mt-5">
            <Row className="home-text justify-content-center">
                <h1>
                    <strong>DO</strong>
                    <small>YOUROWN</small>
                    <strong>DOG</strong>
                </h1>
            </Row>
        </Container>
    )
}

export default Home
