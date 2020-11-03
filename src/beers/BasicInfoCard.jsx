import React from 'react'
import { Card, Accordion, Image, Row, Col, Container } from 'react-bootstrap'

function BasicInfoCard(props) {


    // console.log(props.info);

    return (
        <Container className="mb-2">
            <Card>
                <Accordion defaultActiveKey="0">
                    <Row>
                        <Col md={4}>
                            <Image src={props.imgURL} alt="" className="info-card-img" />
                        </Col>
                        <Col md={8}>
                            <Accordion.Toggle as={Card.Body} eventKey={props.title}>
                                <h1>{props.title}</h1>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={props.title}>
                            <Card.Body>{props.info}</Card.Body>
                            </Accordion.Collapse>
                        </Col>
                    </Row>
                </Accordion>
            </Card>
        </Container>
    )
}

export default BasicInfoCard
